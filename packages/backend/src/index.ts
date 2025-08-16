import type { DefineAPI, DefineEvents, SDK } from "caido:plugin";
import type { ID, RequestResponseOpt } from "caido:utils";

import { spawn } from 'child_process';
import { readFileSync, writeFileSync } from "fs";

import path from "path";

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

// Function to Convert Record to String
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

// Python Interop
function sendSinglePacket(sdk: SDK<BackendAPI, BackendEvents>, data: RequestData): Promise<RequestData> {
  const py_path = path.join(sdk.meta.assetsPath(), "SPA")
  const data_path = path.join(sdk.meta.assetsPath(), "data.json")

  // Install dependencies for python

  writeFileSync(data_path, JSON.stringify(data, null, 2));

  return new Promise((resolve, reject) => {
    const proc = spawn(py_path);

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
        reject(new Error(`Exited with code ${code}, stderr: ${stderr}`));
      }
    });

    proc.on('error', (err) => {
      reject(err);
    });
  });
}

// Main Function For Sending Requests
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

  sdk.api.send("race-finished");
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

export type BackendAPI = DefineAPI<{
  sendRequests: typeof sendRequests
  getSessions: typeof getSessions
  deleteSession: typeof deleteSession
  log_data: typeof log_data
}>;

export type BackendEvents = DefineEvents<{
  "race-finished": () => void;
}>;


export function init(sdk: SDK<BackendAPI, BackendEvents>) {
  // Setup Binary
  const py_path = path.join(sdk.meta.assetsPath(), "SPA")

  spawn("chmod", ["+x", py_path], { stdio: "inherit" });

  // Register API

  sdk.api.register("sendRequests", sendRequests)
  
  sdk.api.register("getSessions", getSessions)

  sdk.api.register("deleteSession", deleteSession)

  sdk.api.register("log_data", log_data)
}