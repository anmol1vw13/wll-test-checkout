import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App/App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/configure-store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
