import React, { Fragment } from "react";
import { Navbar } from "../../shared/components/";
import Board from "./Board";

const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <Board />
    </Fragment>
  );
};

export default Dashboard;
