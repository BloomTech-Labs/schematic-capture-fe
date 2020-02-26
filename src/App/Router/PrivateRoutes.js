import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../../shared/components/PrivateRoute";
import Client from "../Client";
import Project from "../Project";
import Jobsheet from "../Jobsheet";
import CreateNewClient from "../Client/CreateNew";
import CreateNewProject from "../Project/CreateNew";
import CreateNewJobsheet from "../Jobsheet/CreateNew/Jobsheet";
import Dashboard from "../Dashboard";

const PrivateRoutes = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default PrivateRoutes;
