import React from "react";

import Header from "./CNProjectHeader";
import Form from "./Form";
import { Navbar } from "../../../shared/components";
import { Area } from "./Styles";

const NewProject = () => {
  return (
    <>
      <Navbar />
      <Area>
        <Header />
        <Form />
      </Area>
    </>
  );
};

export default NewProject;
