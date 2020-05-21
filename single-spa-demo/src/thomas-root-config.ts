import { registerApplication, start } from "single-spa";
import * as isActive from "./activityFns";

registerApplication({
  name: "react-app",
  app: () => System.import("@thomas/react-app"),
  activeWhen: isActive.react,
});

registerApplication({
  name: "vue-app",
  app: () => System.import("@thomas/vue-app"),
  activeWhen: isActive.vue,
});

registerApplication({
  name: "svelte-app",
  app: () => System.import("@thomas/svelte-app"),
  activeWhen: isActive.svelte,
});

start({
  urlRerouteOnly: true,
});
