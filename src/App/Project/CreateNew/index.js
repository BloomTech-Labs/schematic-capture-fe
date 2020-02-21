import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { schema } from "./schema";
import { dispatchers } from "../../../shared/actions/dashboardActions";

import { StyledFields } from "./Styles";

const { addNewProject } = dispatchers;

const CreateNewProject = () => {
  const { handleSubmit, register, errors } = useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const onAddNewProject = data => {
    dispatch(addNewProject(data, params.id, history));
  };

  return (
    <form onSubmit={handleSubmit(onAddNewProject)}>
      <StyledFields fields={schema} register={register} errors={errors} />
      <button type="submit">Save</button>
      <Link to={`/client/${params.id}`}>Cancel</Link>
    </form>
  );
};

export default CreateNewProject;
