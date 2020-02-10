import React from "react";

import Form from "../../../shared/components/Form";
import schema from "./schema";

import { FormHeading } from "./Styles";

const CreateNew = () => {
  return (
    <div>
      <FormHeading>New Client</FormHeading>
      <Form fields={schema} buttonText="Save" />
    </div>
  );
};

export default CreateNew;
