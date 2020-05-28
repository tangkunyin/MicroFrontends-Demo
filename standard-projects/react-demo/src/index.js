import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import * as serviceWorker from "./serviceWorker";

//  ----------- icestark微前端 start ------------------------ //
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
}
//  ----------- icestark微前端 end ------------------------ //

//  ----------- qiankun微前端 start ------------------------ //
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
//  ----------- qiankun微前端 end ------------------------ //

function render(props) {
  const { container } = props;
  ReactDOM.render(
    <Router basename={"/"}>{renderRoutes(routes)}</Router>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

// 正常跑...
if (!window.__POWERED_BY_QIANKUN__ && !isInIcestark()) {
  render({});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
