import singleSpaSvelte from "single-spa-svelte";
import SvelteApp from "./main";

const svelteLifecycles = singleSpaSvelte({
  component: function () {
    return SvelteApp;
  },
  domElementGetter: () => document.getElementById("svelte-app"),
  props: {},
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
