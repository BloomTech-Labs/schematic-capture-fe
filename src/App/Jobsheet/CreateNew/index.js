import React, { Fragment } from "react";
import { Navbar } from "../../../shared/components";
import CreateNewJobsheet from "./Jobsheet";

const NewJobSheet = () => {
  return (
    <Fragment>
      <Navbar />
      <CreateNewJobsheet />
    </Fragment>
  );
};

export default NewJobSheet;
