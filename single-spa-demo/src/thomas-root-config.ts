import { registerApplication, start } from "single-spa";

registerApplication({
  name: "react-app",
  app: () => System.import("@thomas/react-app"),
  activeWhen: "/react",
});

registerApplication({
  name: "vue-app",
  app: () => System.import("@thomas/vue-app"),
  activeWhen: "/vue",
});

registerApplication({
  name: "svelte-app",
  app: () => System.import("@thomas/svelte-app"),
  activeWhen: "/svelte",
});

start({
  urlRerouteOnly: true,
});
