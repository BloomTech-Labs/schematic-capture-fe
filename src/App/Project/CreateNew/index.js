import React, { Fragment } from "react";

import Header from "./Header";
import Form from "./Form";
import { Navbar } from "../../../shared/components";
import { Area } from "./Styles";

const NewProject = () => {
  return (
    <Fragment>
      <Navbar />
      <Area>
        <Header />
        <Form />
      </Area>
    </Fragment>
  );
};

export default NewProject;
