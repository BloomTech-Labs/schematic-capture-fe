import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../shared/components/PrivateRoute";

// components
import CreateClient from "../Client/CreateNew";

const Router = () => {
  return (
    <Switch>
      <PrivateRoute path="/dashboard/client/new" component={CreateClient} />
    </Switch>
  );
};

export default Router;
