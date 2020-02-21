import React, { Fragment, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import NormalizeStyles from "./NormalizeStyles";
import BaseStyles from "./BaseStyles";

import PageLoader from "../shared/components/PageLoader";

import Router from "./Router";

// redux hooks
import { useSelector } from "react-redux";

const App = () => {
  const { isLoading, error } = useSelector(state => state.app);

  useEffect(() => {
    if (!!error) {
      alert(error);
    }
  }, [error]);

  return (
    <Fragment>
      {isLoading && <PageLoader />}
      <BrowserRouter>
        <NormalizeStyles />
        <BaseStyles />
        <Router />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
