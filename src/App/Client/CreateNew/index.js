import React, { Fragment } from "react";
import { Navbar } from "../../../shared/components";
import CreateNewClient from "./Form";

const NewClient = () => {
  return (
    <Fragment>
      <Navbar />
      <CreateNewClient />
    </Fragment>
  );
};

export default NewClient;
