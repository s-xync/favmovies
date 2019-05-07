import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
