import React from "react";

import Header from "./CNProjectHeader";
import NewProjectPopup from "./NewProjectPopup";

import { Area } from "../../Styles/Projects/projectStyles";

const NewProject = () => {
  return (
    <>
      <Header />
      <NewProjectPopup />
    </>
  );
};

export default NewProject;
