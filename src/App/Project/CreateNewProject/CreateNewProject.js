import React from "react";

import Header from "./CNProjectHeader";
import Form from "./Form";

import { Area } from "../../Styles/Projects/projectStyles";

const NewProject = () => {
  return (
    <>
      <Area>
        <Header />
        <Form />
      </Area>
    </>
  );
};

export default NewProject;
