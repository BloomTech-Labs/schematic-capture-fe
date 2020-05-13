import React from "react";
import ReactDOM from "react-dom";

import App from "./App/App.js";
import * as Sentry from "@sentry/browser";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

import rootReducer from "./shared/reducers/rootReducer";

// custom middleware
import { saveState, loadState } from "./shared/utils/localStorage";

Sentry.init({
  dsn: "https://05f80d89d56f4f538ab2b0fbedc568e4@sentry.io/2046923",
});

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, saveState)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
