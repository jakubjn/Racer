<script setup lang="ts">

import { useSDK } from "@/plugins/sdk";
import type { Session } from "@/types";

import Card from "primevue/card";
import Textarea from "primevue/textarea";

import Tabs from "../components/Tabs.vue"
import { ref } from "vue";

import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

// Retrieve the SDK instance to interact with the backend
const sdk = useSDK();

const activeSession = ref<Session>();

const sessions = ref<Session[]>([]);

const request_text = ref<string>("")
const response_text = ref<string>("")

const toast = useToast();

sdk.backend.onEvent("race-finished", async () => {
  sessions.value = await sdk.backend.getSessions();

  if (sessions.value[0]) {
    activeSession.value = sessions.value[0]

    setRequestResponse();
  }

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

function setRequestResponse() {

  request_text.value = `${activeSession.value?.request_method} ${activeSession.value?.request_path} HTTP/2
${activeSession.value?.request_headers}


${activeSession.value?.request_body}`

  response_text.value = `HTTP/2 ${activeSession.value?.response_code}
${activeSession.value?.response_headers}


${activeSession.value?.response_body}`
}

</script>

<template>
  <Toast position="bottom-right"/>

  <Card class="w-full h-full">
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Textarea wrap="soft" v-model="request_text" readonly id="request" class="resize-none text-lg break-al leading-relaxed h-[75vh]" />
          <Textarea wrap="soft" v-model="response_text" readonly id="response" class="resize-none text-lg break-all leading-relaxed h-[75vh]" />
        </div>
      </div>
    </template>
  </Card>
</template>
