import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { dispatchers } from "../../../shared/actions/dashboardActions";

const { addNewProject } = dispatchers;

const CreateNewProject = () => {
  const { handleSubmit, register } = useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const onAddNewProject = (data) => {
    dispatch(addNewProject(data, params.id, history));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onAddNewProject)}>
        <p>Please enter the project name below:</p>
        <div>
          {/*<form onSubmit={handleSubmit(onAddNewProject)}>*/}
          {/*  <StyledFields fields={schema} register={register} errors={errors} />*/}
          {/*  <button type="submit">Save</button>*/}
          {/*  <Link to={`/client/${params.id}`}>Cancel</Link>*/}
          {/*</form>*/}
          <input
            type="string"
            name="name"
            id="name"
            placeholder="Project Name"
            aria-label="Project Name"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <button variant="primary" submit="button" btnBlock>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewProject;
