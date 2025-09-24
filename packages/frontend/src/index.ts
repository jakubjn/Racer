import { Classic } from "@caido/primevue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";

import { SDKPlugin } from "./plugins/sdk";
import "./styles/index.css";
import type { FrontendSDK } from "./types";
import App from "./views/App.vue";
import { CommandContext } from "@caido/sdk-frontend/src/types";

import ToastService from "primevue/toastservice";

// This is the entry point for the frontend plugin
export const init = (sdk: FrontendSDK) => {
  const app = createApp(App);

  app.use(PrimeVue, {
    unstyled: true,
    pt: Classic,
  });

  app.use(SDKPlugin, sdk);
  app.use(ToastService)

  const root = document.createElement("div");
  Object.assign(root.style, {
    height: "100%",
    width: "100%",
  });

  root.id = `plugin--racer`;

  app.mount(root);

  sdk.navigation.addPage("/", {
    body: root,
  });

  sdk.sidebar.registerItem("Racer", "/racer", {
    icon: "fa-solid fa-truck-fast"
  });

  // Function to Send Request to Plugin
  function sendToPlugin(context: CommandContext) {
    if (context.type == "RequestRowContext" && context.requests[0]) {
      const host: string = context.requests[0].host

      let allowed: boolean = true

      for (const request of context.requests) {
        if (host !== request.host) {
          allowed = false
        }
      }

      if (allowed == true) {
        app.config.globalProperties.$toast.add({
          severity: "info",
          summary: "Working",
          detail: "Requests are beint sent...",
          life: 3000
        });

        sdk.backend.sendRequests(context);
      } else {
        app.config.globalProperties.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "The host must be the same for Single Packet Attacks.",
          life: 3000
        });

        sdk.backend.log("Host Doesn't Match")
      }
    }
  }

  //Function to queue requests
  function queueRequest(context: CommandContext) {
    if (context.type != "RequestContext") {
      return
    }

    app.config.globalProperties.$toast.add({
      severity: "info",
      summary: "Working",
      detail: "Request is being queued...",
      life: 3000
    });

    sdk.backend.queueRequest(context)
  }

  // Command to Send Request to Plugin
  sdk.commands.register("send", {
    name: "Race",
    run: sendToPlugin,
    group: "Custom Commands",
  });

  // Command to Queue a Request
  sdk.commands.register("queue", {
    name: "Queue Request",
    run: (context) => sdk.backend.queueRequest(context),
    group: "Custom Commands",
  });

  // Command to Send the Queued Request
  sdk.commands.register("send_queue", {
    name: "Race",
    run: () => sdk.backend.sendQueue(),
    group: "Custom Commands",
  });

  // Register the Commands in Menu
  sdk.menu.registerItem({
    type: "RequestRow",
    commandId: "send",
    leadingIcon: "fa-solid fa-truck-fast",
  });

  sdk.menu.registerItem({
    type: "Request",
    commandId: "queue",
    leadingIcon: "fa-solid fa-truck-fast",
  });

  sdk.menu.registerItem({
    type: "RequestRow",
    commandId: "send",
    leadingIcon: "fa-solid fa-truck-fast",
  });

  sdk.menu.registerItem({
    type: "Request",
    commandId: "send_queue",
    leadingIcon: "fa-solid fa-truck-fast",
  });
};






