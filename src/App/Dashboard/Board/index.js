import React from "react";

import Header from "./Header";
import Clients from "./Clients";

import { Main } from "./Styles";

const Board = () => {
  return (
    <Main>
      <Header />
      <Clients />
    </Main>
  );
};

export default Board;
