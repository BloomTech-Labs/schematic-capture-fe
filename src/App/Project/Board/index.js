import React from "react";

import Header from "./Header";
import Jobsheets from "./Jobsheets";

import { Main } from "./Styles";

const Board = () => {
  return (
    <Main>
      <Header />
      <Jobsheets />
    </Main>
  );
};

export default Board;
