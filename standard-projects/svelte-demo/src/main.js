import App from "./App.svelte";

let app = null;
function render() {
  app = new App({
    target: document.body,
    props: {
      name: "Sub App",
    },
  });
}

// ======================= 整合qiankun微前端 start =====================
export async function bootstrap() {
  console.log("vue app bootstraped");
}

export async function mount(props) {
  console.log("props from main app", props);
  render();
}

export async function unmount() {
  app = null;
}
// ======================= 整合qiankun微前端 end =====================

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export default app;
