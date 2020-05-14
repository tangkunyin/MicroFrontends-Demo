import { registerApplication, start } from "single-spa";

registerApplication(
  "@/",
  () => System.import("@/"),
  (location) => location.pathname.startsWith("/")
);

start({
  urlRerouteOnly: true,
});
