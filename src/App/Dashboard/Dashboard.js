import React from "react";

import Header from "./DashboardHeader";
import Clients from "./Clients";

import { Main } from "../../shared/components/Styles/ConsolidatedStyles";

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
