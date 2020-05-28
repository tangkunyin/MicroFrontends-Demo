import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import App from "./App.vue";
import {
  isInIcestark,
  getMountNode,
  getBasename,
  registerAppEnter,
  registerAppLeave,
} from "@ice/stark-app";

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__
      ? "/vue"
      : isInIcestark()
      ? getBasename()
      : "/",
    mode: "history",
    routes,
  });
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
}

// ======================= 整合icestark微前端 start =====================
if (isInIcestark()) {
  let vue;
  const mountNode = getMountNode();
  registerAppEnter(() => {
    vue = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
    // for vue don't replace mountNode
    mountNode.innerHTML = "";
    mountNode.appendChild(vue.$el);
  });
  // make sure the unmount event is triggered
  registerAppLeave(() => {
    vue && vue.$destroy();
  });
}
// ======================= 整合icestark微前端 end =====================

// ======================= 整合qiankun微前端 start =====================
export async function bootstrap() {
  console.log("vue app bootstraped");
}

export async function mount(props) {
  console.log("props from main app", props);
  render();
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
// ======================= 整合qiankun微前端 end =====================

if (!window.__POWERED_BY_QIANKUN__ && !isInIcestark()) {
  render();
}
