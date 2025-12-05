<script setup lang="ts">
import { useSDK } from "@/plugins/sdk";
import type { Session } from "@/types";

import Card from "primevue/card";
import Textarea from "primevue/textarea";

import Tabs from "../components/Tabs.vue"
import { onMounted, ref } from "vue";

import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

// TYPES

type RequestText = {
  method: string,
  path: string,
  headers: Record<string, string>,
  body: string
}

type ResponseText = {
  status: string,
  headers: Record<string, string>,
  body: Record<string, number>
}

// DEFINITIONS

const sdk = useSDK();

const activeSession = ref<Session>();

const sessions = ref<Session[]>([]);

const request_text = ref<string>("");
const response_text = ref<string>("");

const request_main = ref<RequestText>({
  method: "",
  path: "",
  headers: {},
  body: ""
});

const response_main = ref<ResponseText>({
  status: "",
  headers: {},
  body: {}
});

const toast = useToast();

// HELPER FUNCTIONS

function parseBody(body: string, contentType: string) {
  if (contentType === 'html') {
    return parseHTML(body);
  } else if (contentType === 'json') {
    return parseJSON(body);
  } else {
    return { [body]: 0 };
  }
}

function parseHTML(html: string) {
  const lines = html.split('\n');
  const result: Record<string, number> = {};
  let depth = 0;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') continue;
    
    // Check if it's a closing tag
    if (trimmed.startsWith('</')) {
      depth = Math.max(0, depth - 1);
      result[trimmed] = depth;
    }
    // Check if it's an opening tag
    else if (trimmed.startsWith('<') && trimmed.endsWith('>')) {
      result[trimmed] = depth;
      // If it's not self-closing, increase depth for next content
      if (!trimmed.endsWith('/>')) {
        depth++;
      }
    }
    // Regular content
    else {
      result[trimmed] = depth;
    }
  }
  
  return result;
}

function parseJSON(json: string) {
  try {
    const parsed = JSON.parse(json);
    const formatted = JSON.stringify(parsed, null, 2);
    const lines = formatted.split('\n');
    const result: Record<string, number> = {};
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed === '') continue;
      
      // Count leading spaces to determine indentation
      const leadingSpaces = line.length - line.trimStart().length;
      const indentLevel = Math.floor(leadingSpaces / 2);
      
      result[trimmed] = indentLevel;
    }
    
    return result;
  } catch (e) {
    // If JSON parsing fails, return as plain text
    return { [json]: 0 };
  }
}

function parseHeaders(headerString: string) {
  const headers: Record<string, string> = {};
  
  const lines = headerString.split('\n');
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (trimmedLine === '') continue;
    
    const colonIndex = trimmedLine.indexOf(':');
    
    if (colonIndex === -1) continue;
    
    const name = trimmedLine.substring(0, colonIndex).trim();
    const value = trimmedLine.substring(colonIndex + 1).trim();
    
    headers[name] = value;
  }
  
  return headers;
}

function stripStatus(headerString: string) {
  const lines = headerString.split('\n');
  
  const filteredLines = lines.filter(line => {
    const trimmedLine = line.trim().toLowerCase();
    return !trimmedLine.startsWith(':status')
  });
  
  return filteredLines.join('\n');
}

function setRequestResponse() {

  response_text.value = `HTTP/2 ${activeSession.value?.response_code}
${activeSession.value?.response_headers}


${activeSession.value?.response_body}`

  if(activeSession.value) {
    request_main.value.method = activeSession.value.request_method;
    request_main.value.path = activeSession.value.request_path;
    request_main.value.headers = parseHeaders(activeSession.value.request_headers);
    request_main.value.body = activeSession.value.request_body;

    response_main.value.status = activeSession.value.response_code;
    response_main.value.headers = parseHeaders(stripStatus(activeSession.value.response_headers));
    response_main.value.body = parseBody(activeSession.value.response_body, "html");
  }
}

async function refreshSession() {
  sessions.value = await sdk.backend.getSessions();

  if (sessions.value[0]) {
    activeSession.value = sessions.value[0]

    setRequestResponse();
  }
}

function selectSession(session: Session) {
  activeSession.value = session

  setRequestResponse();
}

function deleteSession(id: string) {
  sdk.backend.deleteSession(id);

  sessions.value = sessions.value.filter(session => session.id !== id)

  if (sessions.value[0]) {
    activeSession.value = sessions.value[0]

    setRequestResponse();
  } else {
    activeSession.value = undefined

    request_text.value = ""
    response_text.value = ""
  }
}

// MAIN

onMounted(async () => {
  await refreshSession();
});

sdk.backend.onEvent("race-finished", async () => {
  await refreshSession();

  toast.add({
    severity: "success",
    summary: "Finished",
    detail: "Requests sent and received successfully.",
    life: 3000
  });
});

sdk.backend.onEvent("toast", async (severity: "success" | "info" | "warn" | "error" | "secondary" | "contrast" | undefined, summary: string, detail: string) => {
  toast.add({
    severity: severity,
    summary: summary,
    detail: detail,
    life: 3000
  });
})

</script>

<template>
  <Toast position="bottom-right"/>

  <div class="flex flex-col w-full h-full">
    <Card class="w-full h-[9vh]">
      <template #content>
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-white">Racer</h2>

          <div class="flex gap-2 flex-row flex-wrap">  
            <Tabs
              v-for="session in sessions" 
              :key="session.id"
              :sessionId="session.id" 
              :label="session.id" 
              :onClose="() => deleteSession(session.id)"
              :isSelected="activeSession?.id == session.id" 
              :onSelect="() => selectSession(session)"
              :onContextMenu="(e: any) => {}">
            </Tabs>
          </div>
          </div>
      </template>
    </Card>

    <div class="flex flex-row pt-1">
        <Card class="w-[50%] h-[84vh] mr-1">
          <template #content>
            <div class="h-[81vh] overflow-y-auto select-text">
              <span class="text-lg text-violet-300">{{ request_main.method }}</span> <span class="text-lg">{{ request_main.path }} HTTP/2</span>

              <br/>

              <div v-for="(value, key) in request_main.headers" :key="key">
                <span class="text-lg text-amber-300">{{ key }}</span>:
                <span class="text-lg break-words">{{ value }}</span>
              </div>

              <br/>
              <br/>

              <span class="text-lg text-emerald-300 break-words">{{ request_main.body }}</span>
            </div>
          </template>
        </Card>

        <Card class="w-[50%] h-[84vh] mr-1">
          <template #content>
            <div class="h-[81vh] overflow-y-auto select-text">
              <span class="text-lg text-green-500">HTTP/2</span> <span class="text-lg text-emerald-300">{{ response_main.status }}</span>

              <br/>

              <div v-for="(value, key) in response_main.headers" :key="key">
                <span class="text-lg text-amber-300">{{ key }}</span>:
                <span class="text-lg break-words">{{ value }}</span>
              </div>

              <br/>
              <br/>

              <div v-for="(value, key) in response_main.body" :key="key">
                <span class="text-lg text-emerald-300 ">{{ key }}</span>
              </div>
            </div>
          </template>
        </Card>
    </div>
  </div>
</template>
