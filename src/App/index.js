import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";

import Router from "./Router";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <NormalizeStyles />
        <BaseStyles />
        <Router />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
