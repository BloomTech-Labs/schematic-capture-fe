import React from "react";
import { useForm } from "react-hook-form";

import { schema } from "./schema";

import { StyledFields } from "./Styles";

const CreateNewClient = () => {
  const { handleSubmit, register, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <StyledFields fields={schema} register={register} errors={errors} />
      <button type="Submit">Save</button>
      <button>Cancel</button>
    </form>
  );
};

export default CreateNewClient;
