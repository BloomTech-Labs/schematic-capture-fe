import React from "react";
import ReactDOM from "react-dom";

import * as Sentry from "@sentry/browser";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./shared/store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

Sentry.init({
    dsn: "https://05f80d89d56f4f538ab2b0fbedc568e4@sentry.io/2046923"
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();
