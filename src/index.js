import React from "react";
import ReactDOM from "react-dom";
import throttle from "lodash.throttle";

// import * as Sentry from "@sentry/browser";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./shared/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Sentry.init({
//     dsn: "https://05f80d89d56f4f538ab2b0fbedc568e4@sentry.io/2046923"
// });

const saveState = throttle(
  store => next => action => {
    const { dashboard } = store.getState();
    const serialized = JSON.stringify(dashboard);

    try {
      localStorage.setItem("state", serialized);
    } catch (error) {}

    next(action);
  },
  1000
);

const loadState = () => {
  try {
    const serialized = localStorage.getItem("state");
    if (serialized === null) {
      return undefined;
    }
    return JSON.parse(serialized);
  } catch (error) {
    return undefined;
  }
};

const persistedState = loadState();
const store = createStore(
  rootReducer,
  { dashboard: persistedState },
  applyMiddleware(thunk, saveState)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
