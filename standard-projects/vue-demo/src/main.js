import Vue from "vue";
import router from "./routes";
import App from "./App.vue";

// 整合icestark微前端
import {
  isInIcestark,
  getMountNode,
  registerAppEnter,
  registerAppLeave,
} from "@ice/stark-app";

Vue.config.productionTip = false;

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
} else {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
}
