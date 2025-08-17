// packages/backend/src/index.ts
import { spawn } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
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
function sendSinglePacket(sdk, data) {
  const py_path = path.join(sdk.meta.assetsPath(), "SPA");
  const data_path = path.join(sdk.meta.assetsPath(), "data.json");
  writeFileSync(data_path, JSON.stringify(data, null, 2));
  return new Promise((resolve, reject) => {
    const proc = spawn(py_path);
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
        reject(new Error(`Exited with code ${code}, stderr: ${stderr}`));
      }
    });
    proc.on("error", (err) => {
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
  sdk.api.send("race-finished");
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
function init(sdk) {
  const py_path = path.join(sdk.meta.assetsPath(), "SPA");
  spawn("chmod", ["+x", py_path], { stdio: "inherit" });
  sdk.api.register("sendRequests", sendRequests);
  sdk.api.register("getSessions", getSessions);
  sdk.api.register("deleteSession", deleteSession);
  sdk.api.register("log_data", log_data);
}
export {
  deleteSession,
  getSessions,
  init,
  log_data,
  sendRequests
};
