import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import * as serviceWorker from "./serviceWorker";

// 整合icestark微前端
import {
  isInIcestark,
  getMountNode,
  registerAppEnter,
  registerAppLeave,
  getBasename,
} from "@ice/stark-app";

if (isInIcestark()) {
  registerAppEnter(() => {
    ReactDOM.render(
      <Router basename={getBasename()}>{renderRoutes(routes)}</Router>,
      getMountNode()
    );
  });
  registerAppLeave(() => {
    ReactDOM.unmountComponentAtNode(getMountNode());
  });
} else {
  ReactDOM.render(
    <Router basename={"/"}>{renderRoutes(routes)}</Router>,
    document.getElementById("root")
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
