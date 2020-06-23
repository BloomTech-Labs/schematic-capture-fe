import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import NameDropDownMenu from "../../../shared/components/Components/NameDropDownMenu";

import { dispatchers } from "../../../shared/actions/dashboardActions";
import { BackToLink } from "../../../shared/components";
import { Link } from "react-router-dom";

import Jobsheets from "./Jobsheets";
import { Section2 } from "../../Styles/Client";
import { NewProjBtn, BtnCont,  } from "../../Styles/Jobsheets";
import InviteNewUserModal from "./InvitePopup"
import {
  Title,
  Greeting,
  Seperate2,
  RightSide,
  Profile,
  Hover,
  SearchIn,
  Buttion,
} from "../../Styles/Dashboard";
import { Bread } from "../../Styles/Project";
import { Column } from "../../Styles/Client";

import Search from "../../Styles/Dashboard/Search.png";
import Unknown from "../../Styles/Dashboard/unknown.jpg";

import swal from "sweetalert";
// import TechModal from "./TechPopup";

const { updateProjectName, fetchJobsheets } = dispatchers;

const fetchJobsheetsSideEffect = async (dispatch, id, setJobsheets) => {
  await dispatch(fetchJobsheets(id, setJobsheets));
};

const PageHeader = ({ counter, setCounter }) => {
  const currentClient = useSelector((state) => state.dashboard.currentClient);
  const user = useSelector((state) => state.auth.user);
  const currentProject = useSelector((state) => state.dashboard.currentProject);
  const params = useParams();

  const [editing, setEditing] = useState(false);
  const [jobsheets, setJobsheets] = useState([]);
  const [jobsheets1, setJobsheets1] = useState([]);
  const [search, setSearch] = useState("");
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
  

  useEffect(() => {
    fetchJobsheetsSideEffect(dispatch, params.id, setJobsheets);
  }, []);

  useEffect(() => {
    console.log(search);
    setJobsheets1(
      jobsheets.filter((input) => {
        return input.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [editing, search]);

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
              text="Clients"
            />
            <BackToLink
              style={{ marginBottom: "2rem" }}
              to={`/client/${currentClient.id}`}
              text="Projects"
            />
          </Bread>
        </Column>
        <br />
        <RightSide>
          <Buttion onClick={() => setEditing(!editing)}>
            <Hover src={Search} />
          </Buttion>
          {editing ? (
            <SearchIn
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          ) : (
            <></>
          )}
          <Greeting onClick={onLogout} variant="primary">
            Hi, {user.firstName}
            <Profile src={Unknown} />
            <NameDropDownMenu
              firstName={user.firstName}
              lastName={user.lastName}
            />
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
                <h1 onClick={() => setIsEditing(true)}>{currentProject.name}</h1>

                <h4>
                  Complete: ({currentProject.tally})
                </h4>
              </div>
            )}
            <BtnCont>
              {user.roleId !== 3 && <InviteNewUserModal buttonLabel="Invite User" />}
              
              {user.roleId === 1 && (
                <NewProjBtn
                  to={`/project/${currentClient.id}/jobsheet/new`}
                  variant="primary"
                >
                  New Jobsheet
                </NewProjBtn>
              )}
            </BtnCont>
          </Section2>
        )}
      </div>
      <Jobsheets
        jobsheet={jobsheets1}
        search={search}
        setCounter={setCounter}
      />
    </>
  );
};

export default PageHeader;
