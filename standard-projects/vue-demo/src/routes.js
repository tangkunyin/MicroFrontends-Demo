import Vue from "vue";
import Router from "vue-router";

import Index from "./pages/Index.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

Vue.use(Router);

export default [
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
];
