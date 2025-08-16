import { type Caido } from "@caido/sdk-frontend";
import { type API } from "backend";

export type FrontendSDK = Caido<API, Record<string, never>>;

export type Session = {
    id: string
    host: string
    request_method: string
    request_path: string
    request_headers: string
    request_body: string

    response_code: string
    response_method: string
    response_headers: string
    response_body: string
}