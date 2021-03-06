import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

type readerProps = {
  appContent?: string;
  loading: boolean;
};

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
function render(props: readerProps) {
  const { appContent, loading } = props;
  if (!app) {
    app = new Vue({
      el: "#subapp-container",
      data() {
        return {
          content: appContent,
          loading: loading,
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

// 3. 初始化并注册子应用
// render({ appContent: "", loading: true });
const loader = (loading: boolean) => render({ loading });

registerMicroApps(
  [
    {
      name: "react-demo",
      entry: "//localhost:9001",
      loader,
      container: "#subapp-viewport",
      activeRule: "/r",
    },
    {
      name: "vue-demo",
      entry: "//localhost:9002",
      loader,
      container: "#subapp-viewport",
      activeRule: "/v",
    },
    {
      name: "svelte-demo",
      entry: "//localhost:9003",
      loader,
      container: "#subapp-viewport",
      activeRule: "/s",
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
setDefaultMountApp("/r");

// 5. 启动主应用
start();
runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});
