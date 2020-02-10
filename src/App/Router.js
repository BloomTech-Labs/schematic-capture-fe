import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../App/Auth/Register";
import Login from "../App/Auth/Login";
import ForgotPassword from "../App/Auth/ForgotPassword";
import Dashboard from "../App/Dashboard";
import PageError from "../shared/components/PageError";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register/:inviteToken?" component={Register} />
        <Route
          path="/gredirect/:idToken/:inviteToken?"
          render={() => <Register gRedirect />}
        />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Login} />
        <Route path="*" component={PageError} />
      </Switch>
    </div>
  );
};

export default Router;
