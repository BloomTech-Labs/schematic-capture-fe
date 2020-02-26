import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Register from "../Auth/components/Register";
import Login from "../Auth/components/Login";
import ForgotPassword from "../Auth/components/ForgotPassword";

const Router = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Login} />
      <Route path="/register/:inviteToken?" component={Register} />
      <Route path="/forgotpassword" component={ForgotPassword} />
    </Fragment>
  );
};

export default Router;
