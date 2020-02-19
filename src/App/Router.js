import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../shared/components/PrivateRoute";
import Register from "../App/Auth/Register";
import Login from "../App/Auth/Login";
import Client from "./Client";
import Project from "./Project";
import Jobsheet from "./Jobsheet";
import CreateNewClient from "./Client/CreateNew";
import CreateNewProject from "./Project/CreateNew";
import CreateNewJobsheet from "./Jobsheet/CreateNew";
import ForgotPassword from "../App/Auth/ForgotPassword";
import Dashboard from "../App/Dashboard";
import PageError from "../shared/components/PageError";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register/:inviteToken?" component={Register} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/client/new" component={CreateNewClient} />
      <PrivateRoute
        path="/client/:id/project/new"
        component={CreateNewProject}
      />
      <PrivateRoute
        path="/project/:id/jobsheet/new"
        component={CreateNewJobsheet}
      />
      <PrivateRoute path="/client/:id" component={Client} />
      <PrivateRoute path="/project/:id" component={Project} />
      <PrivateRoute path="/jobsheet/:id" component={Jobsheet} />
      <Route exact path="/" component={Login} />
      <Route path="*" component={PageError} />
    </Switch>
  );
};

export default Router;
