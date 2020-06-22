import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { dispatchers } from "../../../shared/actions/dashboardActions";
import { NewProjBtn3 } from "../../Styles/Jobsheets/index";

const { addNewProject } = dispatchers;

const CreateNewProject = (props) => {
  const { handleSubmit, register } = useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();


  const onAddNewProject = (data) => {
    
    dispatch(addNewProject(data, params.id, props.setProjects, history));
    props.toggle()
  };


  

  return (
    <div>
      <form onSubmit={handleSubmit(onAddNewProject)}>
        <div>
          <input
            style={{
              height: "4rem",
              width: "30rem",
              border: "1px solid lightgray",
              borderRadius: "5px",
              paddingLeft: "0.9rem",
              color: "gray",
              fontWeight: "lighter",
              fontSize: "90%",
            }}
            type="string"
            name="name"
            id="name"
            placeholder="Project Name"
            aria-label="Project Name"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <NewProjBtn3
            variant="primary"
            submit="button"
            btnBlock
          
          >
            Create
          </NewProjBtn3>
        </div>
      </form>
    </div>
  );
};

export default CreateNewProject;
