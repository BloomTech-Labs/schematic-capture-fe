import React, { Fragment } from "react";
import NavBar from "../../shared/components/Navbar";
import Board from "./Board";

const Dashboard = () => {
  return (
    <Fragment>
      <NavBar />
      <Board />
    </Fragment>
  );
};

export default Dashboard;
