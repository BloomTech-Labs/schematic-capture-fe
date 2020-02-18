import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../shared/components/PrivateRoute";

// components
import CreateClient from "../Client/CreateNew";

const Router = () => {
  return (
    <Switch>
      <PrivateRoute path="/client/new" component={CreateClient} />
      <PrivateRoute path="/client/:id" component={() => <h1>Client Here</h1>} />
    </Switch>
  );
};

export default Router;
