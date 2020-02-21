import React, { Fragment } from "react";
import NavBar from "../../shared/components/Navbar";
import Board from "./Board";

const Client = () => {
  return (
    <Fragment>
      <NavBar />
      <Board />
    </Fragment>
  );
};

export default Client;
