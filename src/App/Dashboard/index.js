import React, { Fragment } from "react";
import NavBar from "./Navbar";

import Clients from "../Client";
import Router from "./Router";

const Dashboard = () => {
  return (
    <Fragment>
      <NavBar />
      <h1>Dashboard</h1>
      <Router />
      <Clients />
    </Fragment>
  );
};

export default Dashboard;
