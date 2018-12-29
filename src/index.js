import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Compoent } from "./compoent";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Compoent />
  </Provider>,
  document.getElementById("root")
);
