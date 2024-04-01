import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

//
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./my_app_7_redux/services/reducers/Vid_084_index"; //change according to learn from video
const store = createStore(rootReducer);
// console.log("Store data:", store);

const root = document.getElementById("root");
const rootInstance = createRoot(root);

rootInstance.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.unregister();
