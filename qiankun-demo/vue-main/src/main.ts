import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

// 1. 引入qiankun微前端大法
import {
  registerMicroApps,
  setDefaultMountApp,
  start,
  runAfterFirstMounted,
} from "qiankun";

// 2. 增加渲染函数(官方例子中有参考)
let app: any = null;
function render(appContent: any, loading?: boolean) {
  if (!app) {
    app = new Vue({
      el: "#subapp-container",
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(App, {
          props: {
            // @ts-ignore
            content: this.content,
            // @ts-ignore
            loading: this.loading,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

// 3. 初始化并注册字应用
render({ loading: true });
const loader = (loading: boolean) => render({ loading });

registerMicroApps(
  [
    {
      name: "react",
      entry: "//localhost:3000",
      container: "#subapp-viewport",
      loader,
      activeRule: "/react",
    },
    {
      name: "vue",
      entry: "//localhost:8080",
      container: "#subapp-viewport",
      loader,
      activeRule: "/vue",
    },
    {
      name: "svelte",
      entry: "//localhost:5000",
      container: "#subapp-viewport",
      loader,
      activeRule: "/svelte",
    },
  ],
  {
    beforeLoad: [
      // @ts-ignore
      (app) => {
        console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
      },
    ],
    beforeMount: [
      // @ts-ignore
      (app) => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      },
    ],
    afterUnmount: [
      // @ts-ignore
      (app) => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;",
          app.name
        );
      },
    ],
  }
);

// 4. 启动默认子应用
setDefaultMountApp("/react");

// 5. 启动主应用
start();
runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});
