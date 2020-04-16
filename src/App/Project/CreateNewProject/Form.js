import React from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { dispatchers } from "../../../shared/actions/dashboardActions"
import { Button, StyledField } from "../../Auth/Styles"
import { InviteGroup } from "../../../shared/components/Styles/Invite-Styles"
import Fields from "../../../shared/components/Components/Fields";

const { addNewProject } = dispatchers

const CreateNewProject = () => {
  const { handleSubmit, register } = useForm()
  const params = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const onAddNewProject = data => {
    dispatch(addNewProject(data, params.id, history))
  }

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
          <Fields
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
