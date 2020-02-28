import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../shared/components/PrivateRoute";
import Auth from "./Auth";
import Client from "./Client";
import Project from "./Project";
import Jobsheet from "./Jobsheet";
import Dashboard from "./Dashboard";
import PageError from "../shared/components/PageError";
import NewProject from "./Project/CreateNew";
import SendInvite from "../shared/components/Invite/SendInvite";
import NewClient from "./Client/CreateNew";
import NewJobSheet from "./Jobsheet/CreateNew";

const Router = () => {
  return (
    <Fragment>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/client/new" component={NewClient} />
        <PrivateRoute path="/invite" component={SendInvite} />
        <PrivateRoute path="/client/:id/project/new" component={NewProject} />
        <PrivateRoute
          path="/project/:id/jobsheet/new"
          component={NewJobSheet}
        />
        <PrivateRoute path="/client/:id" component={Client} />
        <PrivateRoute path="/project/:id" component={Project} />
        <PrivateRoute path="/jobsheet/:id" component={Jobsheet} />
        <Route path="/" component={Auth} />
        <Route path="*" component={PageError} />
      </Switch>
    </Fragment>
  );
};

export default Router;
