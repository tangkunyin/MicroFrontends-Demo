import Vue from "vue";
import Router from "vue-router";

import Index from "./pages/Index.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

Vue.use(Router);

import { isInIcestark, getBasename } from "@ice/stark-app";

export default new Router({
  base: isInIcestark() ? getBasename() : "/",
  mode: "history",
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
