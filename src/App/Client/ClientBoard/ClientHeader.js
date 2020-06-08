import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Projects from "./Projects";

import { BackToLink } from "../../../shared/components";
import { useParams } from "react-router-dom";
import  TechModal  from "../../Project/ProjectBoard/TechPopup";

import {
  Projectsh1,
  NewProjBtn,
  Column,
  ClientHeaderContain,
  Section2
} from "../../Styles/Client";

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
import { BtnCont, NewProjBtn2 } from "../../Styles/Jobsheets";

import NameDropDownMenu from "../../../shared/components/Components/NameDropDownMenu";
import Search from "../../Styles/Dashboard/Search.png";
import Unknown from "../../Styles/Dashboard/unknown.jpg";

import swal from "sweetalert";
import { dispatchers, actions } from "../../../shared/actions/dashboardActions";

const { fetchProjects } = dispatchers;
const { SET_CURRENT_CLIENT, SET_CURRENT_PROJECTS } = actions;



const fetchProjectsSideEffect = async (dispatch, id, setProjects) => {
  await dispatch(fetchProjects(id, setProjects));
};

const setCurrentClientAndProjectsSideEffect = async (
  dispatch,
  client,
  projects
) => {
  await dispatch({ type: SET_CURRENT_CLIENT, payload: client });
  await dispatch({ type: SET_CURRENT_PROJECTS, payload: projects });
};

const PageHeader = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { currentClient } = useSelector((state) => state.dashboard);
  const user = useSelector((state) => state.auth.user);
  console.log(user.roleId);

  const clients = useSelector((state) => state.dashboard.clients);
  const client = clients.find((client) => client.id === Number(params.id));

  const [editing, setEditing] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projects1, setProjects1] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProjectsSideEffect(dispatch, params.id, setProjects);
    setCurrentClientAndProjectsSideEffect(dispatch, client, projects);
  }, []);

  useEffect(() => {
    console.log(search);
    setProjects1(
      projects.filter((input) => {
        return input.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [editing, search]);

  useEffect(() => {
    console.log("arraylist tyler look here for list of projects", projects1);
  }, [projects1]);

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
      <ClientHeaderContain>
        {!!currentClient && (
          <Section2>
            <Projectsh1>{currentClient.companyName}</Projectsh1>
            {user.roleId !== 3 && (
                <BtnCont>
              {user.roleId !== 3 && <TechModal buttonLabel="Assign Techs" />}
          <NewProjBtn2
                to={`/client/${currentClient.id}/project/new`}
                variant="primary"
              >
                New&nbsp;Project
              </NewProjBtn2>
                
            </BtnCont>
              
            )}
          </Section2>
        )}
      </ClientHeaderContain>
      <Projects project={projects1} search={search} />
    </>
  );
};

export default PageHeader;
