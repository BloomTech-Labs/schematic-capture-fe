import React from "react";

import Header from "./DashboardHeader";
import Clients from "./Clients";

import { Main } from "./Styles";

import { Navbar } from "../../shared/components"

const Board = () => {
  return (
    <>
    <Navbar />
      <Main>
        <Header />
        <Clients />
      </Main>
    </>
  );
};

export default Board;
