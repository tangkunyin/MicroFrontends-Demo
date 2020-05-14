import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Sub App",
  },
});

export default app;
