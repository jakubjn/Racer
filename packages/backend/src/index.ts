import type { DefineAPI, DefineEvents, SDK } from "caido:plugin";
import type { ID, RequestResponseOpt } from "caido:utils";

import { spawn } from 'child_process';
import { readFileSync, writeFileSync } from "fs";

import path from "path";
import os from 'os';

type RequestRaw = {
  id: ID,
  host: string,
  port: number,
  path: string,
  query: string,
  isTls: boolean
}

type RequestContext = {
  method: string
  path: string
  headers: string
  body: string
}

type ResponseContext = {
  host: string,
  code: number
  headers: string,
  body: string
}

type RequestData = {
  host: string,
  port: number,
  requests: RequestContext[]
  responses: ResponseContext[]
}

// HELPER FUNCTIONS

function headersToString(headers: Record<string, string[]>): string {
  const forbidden = new Set([
    'connection',
    'keep-alive',
    'proxy-connection',
    'upgrade',
    'te',         
    'transfer-encoding',
    'priority',
    'host',
    'accept-encoding'
  ]);

  return Object.entries(headers)
    .filter(([key]) => !forbidden.has(key.toLowerCase()))
    .map(([key, values]) => `${key.toLocaleLowerCase()}: ${values.join(',')}`)
    .join('\n');
}

function stringToHeaders(raw: string) {
  if (!raw) return {};

  // Normalize newlines, and collapse header continuations (lines starting with space/tab)
  raw = raw.replace(/\r\n/g, '\n');

  const logicalLines = [];

  for (const line of raw.split('\n')) {
    if (/^[ \t]/.test(line)) {
      // continuation for previous header
      if (logicalLines.length) {
        logicalLines[logicalLines.length - 1] += ' ' + line.trim();
      }
    } else {
      logicalLines.push(line);
    }
  }

  const out = Object.create(null);

  for (const ln of logicalLines) {
    if (!ln.trim()) continue;
    const idx = ln.indexOf(':');
    if (idx === -1) continue; // skip garbage
    const name = ln.slice(0, idx).trim().toLowerCase();
    const value = ln.slice(idx + 1).trim();

    let parts;
    if (name === 'cookie') {
      // Cookies are semicolon-separated pairs
      parts = value.split(/;\s*/);
    } else if (name === 'set-cookie') {
      // set-cookie should be preserved per-cookie (do not split on commas; cookies contain commas)
      parts = [value];
    } else {
      // RFC: many headers are comma-separated lists — split on commas not inside quotes
      // simple split on unquoted commas:
      parts = value.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
    }

    parts = parts
      .map(p => p.trim())
      .filter(Boolean);

    // dedupe while preserving order
    const seen = new Set();
    const uniq = [];
    for (const p of parts) {
      if (!seen.has(p)) {
        seen.add(p);
        uniq.push(p);
      }
    }

    // merge with existing same-name header
    out[name] = out[name] ? out[name].concat(uniq) : uniq;
  }

  return out;
}

// PYTHON INTEROP

function sendSinglePacket(sdk: SDK<BackendAPI, BackendEvents>, data: RequestData): Promise<RequestData> {
  const platform = os.platform();
  const assetsPath = sdk.meta.assetsPath();

  const isWin = platform === "win32";
  const venvPython = isWin
    ? path.join(assetsPath, "Scripts", "python.exe")
    : path.join(assetsPath, "bin", "python");

  const py_path = path.join(assetsPath, "SPA.py")
  const data_path = path.join(assetsPath, "data.json")

  writeFileSync(data_path, JSON.stringify(data, null, 2));

  return new Promise((resolve, reject) => {
    const proc = spawn(venvPython, [py_path]);

    let stderr = '';

    proc.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (code) => {
      if (code === 0) {
        const raw = readFileSync(data_path, "utf-8");
        const json_data = JSON.parse(raw);

        const responses: ResponseContext[] = json_data.responses as ResponseContext[];

        data.responses = responses

        resolve(data);
      } else {
        sdk.api.send("toast", "error", "Error", "An error occured while sending the requests");
        reject(new Error(`Exited with code ${code}, stderr: ${stderr}`));
      }
    });

    proc.on('error', (err) => {
      sdk.api.send("toast", "error", "Error", "An error occured while sending the requests");
      reject(err);
    });
  });
}

// MAIN FUNCTION

export async function sendRequests(sdk: SDK<BackendAPI, BackendEvents>, context: any): Promise<void> {
  const requests_raw: RequestRaw[] = context.requests

  const requests_to_send: RequestContext[] = [];

  let host: string = ""
  let port: number = 0

  for (const req of requests_raw) {
    const req_real: RequestResponseOpt | undefined = await sdk.requests.get(req.id)

    if(!req_real) {
      sdk.console.warn("Request Not Found")
      continue;
    }

    // Set Port and Host

    host = req.host
    port = req.port

    // Set Body

    let body = req_real.request.getBody()?.toText()

    if(!body) {
      body = ""
    }

    // Set Headers

    const headers_array: Record<string, string[]> = req_real.request.getHeaders()
    const headers: string = headersToString(headers_array)

    const context: RequestContext = {
      method: req_real.request.getMethod(),
      path: req.path,
      headers: headers,
      body: body
    }

    requests_to_send.push(context);
  }

  const data: RequestData = await sendSinglePacket(sdk, { host: host, port: port, requests: requests_to_send, responses: [] });
  
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
  
  for(const i in data.requests) {
    const request: RequestContext | undefined = data.requests[i]
    const response: ResponseContext | undefined = data.responses[i]

    if(request && response) {
      const id: string = Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0');

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
      )
    }
  }

  if(data.responses.length > 0) {
    sdk.api.send("race-finished");
  } else {
    sdk.api.send("toast", "error", "Error", "An error occured while sending the requests");
  }
}

// Returns Active Sessions
export async function getSessions(sdk: SDK<BackendAPI, BackendEvents>): Promise<any> {
  const db = await sdk.meta.db();

  try {
    const statement = await db.prepare("SELECT * FROM sessions");
    const sessions = await statement.all()

    sdk.console.log("Retrieved")

    return sessions
  } catch {
    return []
  }
}

export async function deleteSession(sdk: SDK<BackendAPI, BackendEvents>, id: string): Promise<any> {
  const db = await sdk.meta.db();

  const deleteStatement = await db.prepare(`
    DELETE FROM sessions WHERE id = ?
  `);

  await deleteStatement.run(id);
}

export async function log_data(sdk: SDK<BackendAPI, BackendEvents>, data: any): Promise<void> {
  sdk.console.log(data)
}

export async function clearQueue(sdk: SDK<BackendAPI, BackendEvents>, toast: boolean = true) {
  const db = await sdk.meta.db();

  await db.exec(`DELETE FROM queue`);

  if(toast) {
    sdk.api.send("toast", "info", "Info", "Cleared Request Queue");
  }
}

// QUEUE FUNCTIONS

export async function queueRequest(sdk: SDK<BackendAPI, BackendEvents>, context: any): Promise<void> {
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

  const normalized = raw.replace(/\r\n/g, '\n');
  const parts = normalized.split('\n\n', 2);

  const headersBlock = parts[0]|| '';
  const body = parts[1] || '';

  const lines = headersBlock.split('\n');

  const method = lines[0].split(' ')[0];

  const headers_array = stringToHeaders(lines.slice(1).join('\n'));
  const headers = headersToString(headers_array);

  const path = `${context.request.path}?${context.request.query}`;

  const id: string = Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0');

  await insertStatement.run(
    id,
    context.request.host,
    context.request.port,
    method,
    path,
    headers,
    body
  )
}

export async function sendQueue(sdk: SDK<BackendAPI, BackendEvents>): Promise<void> {
  const db = await sdk.meta.db();

  const rows: any = await (await db.prepare("SELECT * FROM queue")).all();

  if (!rows || rows.length === 0) {
    sdk.api.send("toast", "error", "Error", "The queue is empty");
    return;
  }

  const host = rows[0].host
  const port = rows[0].port

  // Map rows to RequestContext array
  const requests_to_send: RequestContext[] = [];

  for (const row of rows) {
    requests_to_send.push({
      method: row.method,
      path: row.path,
      headers: row.headers,
      body: row.body
    });
  }

  sdk.api.send("toast", "info", "Working", "Queued Requests are beint sent...");

  const data: RequestData = await sendSinglePacket(sdk, { host: host, port: parseInt(port, 10), requests: requests_to_send, responses: [] });

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
  
  for(const i in data.requests) {
    const request: RequestContext | undefined = data.requests[i]
    const response: ResponseContext | undefined = data.responses[i]

    if(request && response) {
      const id: string = Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0');

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
      )
    }
  }

  if(data.responses.length > 0) {
    sdk.api.send("race-finished");
  } else {
    sdk.api.send("toast", "error", "Error", "An error occured while sending the requests");
  }

  clearQueue(sdk, false);
}

// BACKEND API DEFINITION

export type BackendAPI = DefineAPI<{
  sendRequests: typeof sendRequests
  getSessions: typeof getSessions
  deleteSession: typeof deleteSession
  log_data: typeof log_data

  clearQueue: typeof clearQueue
  queueRequest: typeof queueRequest
  sendQueue: typeof sendQueue
}>;

export type BackendEvents = DefineEvents<{
  "race-finished": () => void;
  "toast": () => void;
}>;

// ENTRY FUNCTION

export async function init(sdk: SDK<BackendAPI, BackendEvents>) {

  const platform = os.platform();
  const assetsPath = sdk.meta.assetsPath();
  const reqPath = path.join(assetsPath, 'requirements.txt');

  // Setup Python

  await new Promise<void>((resolve) => {

    // Create venv
    const proc = spawn("python3", ["-m", "venv", assetsPath]);

    let stderr = '';

    proc.stderr.on('data', (data) => { stderr += data.toString(); });

    proc.on('error', (err) => { sdk.console.error(err); });

    proc.on("close", (code) => {
        if (code === 0) resolve();
        else sdk.console.error(stderr)
    });
  });

  const isWin = platform === "win32";
  const venvPython = isWin
    ? path.join(assetsPath, "Scripts", "python.exe")
    : path.join(assetsPath, "bin", "python");

  await new Promise<void>((resolve, reject) => {

    // Install Dependencies
    const proc = spawn(venvPython, ["-m", "pip", "install", "-r", reqPath]);

    let stderr = '';

    proc.stderr.on('data', (data) => { stderr += data.toString(); });

    proc.on('error', (err) => { sdk.console.error(err); });

    proc.on("close", (code) => {
        if (code === 0) resolve();
        else sdk.console.error(stderr)
    });
  });

  // Register API

  sdk.api.register("sendRequests", sendRequests)
  
  sdk.api.register("getSessions", getSessions)

  sdk.api.register("deleteSession", deleteSession)

  sdk.api.register("log_data", log_data)

  sdk.api.register("queueRequest", queueRequest)

  sdk.api.register("sendQueue", sendQueue)

  sdk.api.register("clearQueue", clearQueue)
}