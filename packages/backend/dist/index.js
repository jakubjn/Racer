// packages/backend/src/index.ts
import { spawn } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import os from "os";
function headersToString(headers) {
  const forbidden = /* @__PURE__ */ new Set([
    "connection",
    "keep-alive",
    "proxy-connection",
    "upgrade",
    "te",
    "transfer-encoding",
    "priority",
    "host",
    "accept-encoding"
  ]);
  return Object.entries(headers).filter(([key]) => !forbidden.has(key.toLowerCase())).map(([key, values]) => `${key.toLocaleLowerCase()}: ${values.join(",")}`).join("\n");
}
function stringToHeaders(raw) {
  if (!raw) return {};
  raw = raw.replace(/\r\n/g, "\n");
  const logicalLines = [];
  for (const line of raw.split("\n")) {
    if (/^[ \t]/.test(line)) {
      if (logicalLines.length) {
        logicalLines[logicalLines.length - 1] += " " + line.trim();
      }
    } else {
      logicalLines.push(line);
    }
  }
  const out = /* @__PURE__ */ Object.create(null);
  for (const ln of logicalLines) {
    if (!ln.trim()) continue;
    const idx = ln.indexOf(":");
    if (idx === -1) continue;
    const name = ln.slice(0, idx).trim().toLowerCase();
    const value = ln.slice(idx + 1).trim();
    let parts;
    if (name === "cookie") {
      parts = value.split(/;\s*/);
    } else if (name === "set-cookie") {
      parts = [value];
    } else {
      parts = value.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
    }
    parts = parts.map((p) => p.trim()).filter(Boolean);
    const seen = /* @__PURE__ */ new Set();
    const uniq = [];
    for (const p of parts) {
      if (!seen.has(p)) {
        seen.add(p);
        uniq.push(p);
      }
    }
    out[name] = out[name] ? out[name].concat(uniq) : uniq;
  }
  return out;
}
function sendSinglePacket(sdk, data) {
  const platform = os.platform();
  const assetsPath = sdk.meta.assetsPath();
  const isWin = platform === "win32";
  const venvPython = isWin ? path.join(assetsPath, "Scripts", "python.exe") : path.join(assetsPath, "bin", "python");
  const py_path = path.join(assetsPath, "SPA.py");
  const data_path = path.join(assetsPath, "data.json");
  writeFileSync(data_path, JSON.stringify(data, null, 2));
  return new Promise((resolve, reject) => {
    const proc = spawn(venvPython, [py_path]);
    let stderr = "";
    proc.stderr.on("data", (data2) => {
      stderr += data2.toString();
    });
    proc.on("close", (code) => {
      if (code === 0) {
        const raw = readFileSync(data_path, "utf-8");
        const json_data = JSON.parse(raw);
        const responses = json_data.responses;
        data.responses = responses;
        resolve(data);
      } else {
        sdk.api.send("toast", "error", "Error", "An error occured while sending the requests");
        reject(new Error(`Exited with code ${code}, stderr: ${stderr}`));
      }
    });
    proc.on("error", (err) => {
      sdk.api.send("toast", "error", "Error", "An error occured while sending the requests");
      reject(err);
    });
  });
}
async function sendRequests(sdk, context) {
  const requests_raw = context.requests;
  const requests_to_send = [];
  let host = "";
  let port = 0;
  for (const req of requests_raw) {
    const req_real = await sdk.requests.get(req.id);
    if (!req_real) {
      sdk.console.warn("Request Not Found");
      continue;
    }
    host = req.host;
    port = req.port;
    let body = req_real.request.getBody()?.toText();
    if (!body) {
      body = "";
    }
    const headers_array = req_real.request.getHeaders();
    const headers = headersToString(headers_array);
    const context2 = {
      method: req_real.request.getMethod(),
      path: req.path,
      headers,
      body
    };
    requests_to_send.push(context2);
  }
  const data = await sendSinglePacket(sdk, { host, port, requests: requests_to_send, responses: [] });
  const db = await sdk.meta.db();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      host TEXT,
      request_method TEXT,
      request_path TEXT,
      request_headers TEXT,
      request_body TEXT,
      response_code INTEGER,
      response_headers TEXT,
      response_body TEXT
    );
  `);
  const insertStatement = await db.prepare(`
    INSERT INTO sessions (
      id,
      host,
      request_method,
      request_path,
      request_headers,
      request_body,
      response_code,
      response_headers,
      response_body
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  for (const i in data.requests) {
    const request = data.requests[i];
    const response = data.responses[i];
    if (request && response) {
      const id = Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0");
      await insertStatement.run(
        id,
        host,
        request.method,
        request.path,
        request.headers,
        request.body,
        response.code,
        response.headers,
        response.body
      );
    }
  }
  if (data.responses.length > 0) {
    sdk.api.send("race-finished");
  } else {
    sdk.api.send("toast", "error", "Error", "An error occured while sending the requests");
  }
}
async function getSessions(sdk) {
  const db = await sdk.meta.db();
  try {
    const statement = await db.prepare("SELECT * FROM sessions");
    const sessions = await statement.all();
    sdk.console.log("Retrieved");
    return sessions;
  } catch {
    return [];
  }
}
async function deleteSession(sdk, id) {
  const db = await sdk.meta.db();
  const deleteStatement = await db.prepare(`
    DELETE FROM sessions WHERE id = ?
  `);
  await deleteStatement.run(id);
}
async function log_data(sdk, data) {
  sdk.console.log(data);
}
async function clearQueue(sdk, toast = true) {
  const db = await sdk.meta.db();
  await db.exec(`DELETE FROM queue`);
  if (toast) {
    sdk.api.send("toast", "info", "Info", "Cleared Request Queue");
  }
}
async function queueRequest(sdk, context) {
  const db = await sdk.meta.db();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS queue (
      id TEXT PRIMARY KEY,
      host TEXT,
      port TEXT,
      method TEXT,
      path TEXT,
      headers TEXT,
      body TEXT
    );
  `);
  const insertStatement = await db.prepare(`
    INSERT INTO queue (
      id,
      host,
      port,
      method,
      path,
      headers,
      body
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const raw = context.request.raw;
  const normalized = raw.replace(/\r\n/g, "\n");
  const parts = normalized.split("\n\n", 2);
  const headersBlock = parts[0] || "";
  const body = parts[1] || "";
  const lines = headersBlock.split("\n");
  const method = lines[0].split(" ")[0];
  const headers_array = stringToHeaders(lines.slice(1).join("\n"));
  const headers = headersToString(headers_array);
  const path2 = `${context.request.path}?${context.request.query}`;
  const id = Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0");
  await insertStatement.run(
    id,
    context.request.host,
    context.request.port,
    method,
    path2,
    headers,
    body
  );
}
async function sendQueue(sdk) {
  const db = await sdk.meta.db();
  const rows = await (await db.prepare("SELECT * FROM queue")).all();
  if (!rows || rows.length === 0) {
    sdk.api.send("toast", "error", "Error", "The queue is empty");
    return;
  }
  const host = rows[0].host;
  const port = rows[0].port;
  const requests_to_send = [];
  for (const row of rows) {
    requests_to_send.push({
      method: row.method,
      path: row.path,
      headers: row.headers,
      body: row.body
    });
  }
  sdk.api.send("toast", "info", "Working", "Queued Requests are beint sent...");
  const data = await sendSinglePacket(sdk, { host, port: parseInt(port, 10), requests: requests_to_send, responses: [] });
  await db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      host TEXT,
      request_method TEXT,
      request_path TEXT,
      request_headers TEXT,
      request_body TEXT,
      response_code INTEGER,
      response_headers TEXT,
      response_body TEXT
    );
  `);
  const insertStatement = await db.prepare(`
    INSERT INTO sessions (
      id,
      host,
      request_method,
      request_path,
      request_headers,
      request_body,
      response_code,
      response_headers,
      response_body
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  for (const i in data.requests) {
    const request = data.requests[i];
    const response = data.responses[i];
    if (request && response) {
      const id = Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0");
      await insertStatement.run(
        id,
        host,
        request.method,
        request.path,
        request.headers,
        request.body,
        response.code,
        response.headers,
        response.body
      );
    }
  }
  if (data.responses.length > 0) {
    sdk.api.send("race-finished");
  } else {
    sdk.api.send("toast", "error", "Error", "An error occured while sending the requests");
  }
  clearQueue(sdk, false);
}
async function init(sdk) {
  const platform = os.platform();
  const assetsPath = sdk.meta.assetsPath();
  const reqPath = path.join(assetsPath, "requirements.txt");
  await new Promise((resolve) => {
    const proc = spawn("python3", ["-m", "venv", assetsPath]);
    let stderr = "";
    proc.stderr.on("data", (data) => {
      stderr += data.toString();
    });
    proc.on("error", (err) => {
      sdk.console.error(err);
    });
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else sdk.console.error(stderr);
    });
  });
  const isWin = platform === "win32";
  const venvPython = isWin ? path.join(assetsPath, "Scripts", "python.exe") : path.join(assetsPath, "bin", "python");
  await new Promise((resolve, reject) => {
    const proc = spawn(venvPython, ["-m", "pip", "install", "-r", reqPath]);
    let stderr = "";
    proc.stderr.on("data", (data) => {
      stderr += data.toString();
    });
    proc.on("error", (err) => {
      sdk.console.error(err);
    });
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else sdk.console.error(stderr);
    });
  });
  sdk.api.register("sendRequests", sendRequests);
  sdk.api.register("getSessions", getSessions);
  sdk.api.register("deleteSession", deleteSession);
  sdk.api.register("log_data", log_data);
  sdk.api.register("queueRequest", queueRequest);
  sdk.api.register("sendQueue", sendQueue);
  sdk.api.register("clearQueue", clearQueue);
}
export {
  clearQueue,
  deleteSession,
  getSessions,
  init,
  log_data,
  queueRequest,
  sendQueue,
  sendRequests
};
