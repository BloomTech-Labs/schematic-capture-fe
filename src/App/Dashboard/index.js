import React, { Fragment } from "react";
import NavBar from "../../shared/components/Navbar";
import Board from "./Board";
import Router from "./Router";

const Dashboard = () => {
  return (
    <Fragment>
      <NavBar />
      <Board />
      <Router />
    </Fragment>
  );
};

export default Dashboard;
