import singleSpaSvelte from "single-spa-svelte";
import SvelteApp from "./main";

const svelteLifecycles = singleSpaSvelte({
  component: SvelteApp,
  domElementGetter: () => document.getElementById("svelte-app"),
  props: {
    someData: "data",
  },
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
