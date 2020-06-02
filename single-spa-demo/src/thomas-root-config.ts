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

start();

/**
 * 默认为false。如果设置为true，对history.pushState()和history.replaceState()的调用将不会触发single-spa路由重设。
 * 除非客户端路由被更改，在某些情况下，将此设置为true可以提高性能
 * see: https://github.com/single-spa/single-spa/issues/484
 */
// start({
//   urlRerouteOnly: true,
// });
