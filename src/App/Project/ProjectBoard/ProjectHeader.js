import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { dispatchers } from "../../../shared/actions/dashboardActions";
import { BackToLink } from "../../../shared/components";
import { Link } from "react-router-dom";

import { ClientHeaderContain, Section2 } from "../../Styles/Client";
import { NewProjBtn } from "../../Styles/Jobsheets";

import {
  Title,
  Greeting,
  Seperate2,
  RightSide,
  Profile,
  Hover,
} from "../../Styles/Dashboard";

import { Bread } from "../../Styles/Project";
import { Column } from "../../Styles/Client";

import Search from "../../Styles/Dashboard/Search.png";
import Swirl from "../../Styles/Dashboard/synchronize 1.png";
import Unknown from "../../Styles/Dashboard/unknown.jpg";

import swal from "sweetalert";

const { updateProjectName } = dispatchers;

const PageHeader = ({ counter }) => {
  const currentClient = useSelector((state) => state.dashboard.currentClient);
  const user = useSelector((state) => state.auth.user);
  const currentProject = useSelector((state) => state.dashboard.currentProject);

  const [isEditing, setIsEditing] = useState(false);
  const [projectName, setProjectName] = useState(
    !!currentProject ? currentProject.name : ""
  );
  const dispatch = useDispatch();

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const saveProjectName = (event) => {
    event.preventDefault();
    dispatch(updateProjectName(projectName, setIsEditing));
  };

  const onLogout = () => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("user");
    localStorage.removeItem("state");
    window.location.reload(false);
    return swal("Logged out successfully!", {
      icon: "success",
      timer: 4000,
    });
  };

  return (
    <>
      <Seperate2>
        <Column>
          <Title>Schematic Capture</Title>
          <Bread>
            <BackToLink
              style={{ marginBottom: "2rem" }}
              to="/dashboard"
              text="Home"
            />
            <BackToLink
              style={{ marginBottom: "2rem" }}
              to={`/client/${currentClient.id}`}
              text="Clients"
            />
          </Bread>
        </Column>
        <br />
        <RightSide>
          <Hover src={Swirl} />
          <Hover src={Search} />
          <Greeting onClick={onLogout} variant="primary">
            Hi, {user.firstName}
            <Profile src={Unknown} />
          </Greeting>
        </RightSide>
      </Seperate2>

      <div>
        {!!currentProject && (
          <Section2>
            {isEditing ? (
              <div style={{ display: "flex" }}>
                <input
                  placeholder="Project Name"
                  type="text"
                  value={projectName}
                  onChange={handleProjectNameChange}
                />
                <Link style={{ marginRight: "1rem" }} onClick={saveProjectName}>
                  Save
                </Link>
              </div>
            ) : (
              <div>
                <h1 onClick={() => setIsEditing(true)}>{projectName}</h1>

                <h4>
                  Incomplete ({counter.incomplete}/{counter.total})
                </h4>
              </div>
            )}
            <NewProjBtn
              to={`/project/${currentClient.id}/jobsheet/new`}
              variant="primary"
            >
              New Jobsheet
            </NewProjBtn>
          </Section2>
        )}
      </div>
    </>
  );
};

export default PageHeader;
