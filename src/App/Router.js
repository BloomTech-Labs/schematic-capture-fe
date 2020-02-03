import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../shared/components/auth/Register";
import Login from "../shared/components/auth/Login";
import Dashboard from "../shared/components/Dashboard";
import ForgotPassword from "../shared/components/auth/ForgotPassword";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register/:inviteToken" component={Register} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/gredirect/:idToken"
          render={() => <Register gRedirect />}
        />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default Router;
