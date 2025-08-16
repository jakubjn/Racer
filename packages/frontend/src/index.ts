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

  sdk.sidebar.registerItem("Racer", "/racer");

  // Function to Send Request to Plugin
  function sendToPlugin(context: CommandContext) {
    if(context.type == "RequestRowContext" && context.requests[0]) {
      const host: string = context.requests[0].host

      let allowed: boolean = true

      for(const request of context.requests) {
        if(host !== request.host) {
          allowed = false
        }
      }

      if(allowed == true) {
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

  // Command to Send Request to Plugin
  sdk.commands.register("send", {
    name: "Send to Racer",
    run: sendToPlugin,
    group: "Custom Commands",
  });

  // Register the command in Menu
  sdk.menu.registerItem({
    type: "RequestRow",
    commandId: "send",
    leadingIcon: "fas fa-hand",
  });
};
