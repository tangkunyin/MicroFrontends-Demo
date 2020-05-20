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

start({
  urlRerouteOnly: true,
});
