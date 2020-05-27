import React from "react";
import { renderRoutes } from "react-router-config";

import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";

const Root = ({ route }) => (
  <div>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

export default [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: App,
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
  },
];
