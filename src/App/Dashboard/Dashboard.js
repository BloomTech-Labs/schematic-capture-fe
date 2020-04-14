import React from "react";

import Header from "./DashboardHeader";
import Clients from "./Clients";

import { Main } from "./Styles";

const Board = () => {
  return (
    <>
      <Main>
        <Header />
        <Clients />
      </Main>
    </>
  );
};

export default Board;
