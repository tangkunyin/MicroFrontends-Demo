import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@thomas/navbar",
//   app: () => System.import("@thomas/navbar"),
//   activeWhen: isActive.navbar,
// });

start({
  urlRerouteOnly: true,
});
