import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { schema } from "./schema";
import { dispatchers } from "../../../shared/actions/dashboardActions";

import { StyledFields } from "./Styles";

const CreateNewClient = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const { addNewClient } = dispatchers;

  const onAddNewClient = data => {
    dispatch(addNewClient(data, history));
  };

  return (
    <form onSubmit={handleSubmit(onAddNewClient)}>
      <StyledFields fields={schema} register={register} errors={errors} />
      <button type="Submit">Save</button>
      <button onClick={() => history.push("/dashboard")}>Cancel</button>
    </form>
  );
};

export default CreateNewClient;
