import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewProjectPopup from "../../Project/CreateNewProject/NewProjectPopup"

import Projects from "./Projects";

import { BackToLink } from "../../../shared/components";
import { useParams } from "react-router-dom";
import TechModal from "../../Project/ProjectBoard/TechPopup";
import Help from "../../../shared/components/Components/Help";

import {
  Projectsh1,
  NewProjBtn,
  Column,
  ClientHeaderContain,
  Section2,
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
  console.log(user, "user");

  const clients = useSelector((state) => state.dashboard.clients);
  const client = clients.find((client) => client.id === Number(params.id));

  const [editing, setEditing] = useState(false);
  // const [projects, setProjects] = useState([]);
  const projects = useSelector((state) => state.dashboard.currentProjects)
  const [projects1, setProjects1] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProjectsSideEffect(dispatch, params.id);
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

  return (
    <>
      <Seperate2>
        <Column>
          <Title data-cy="schematic-capture-heading">Schematic Capture</Title>
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
          <Buttion data-cy="search" onClick={() => setEditing(!editing)}>
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
          <Greeting data-cy="greeting" variant="primary">
            Hi, {user.firstName}
            <Profile src={Unknown} />
            <NameDropDownMenu
              firstName={user.firstName}
              lastName={user.lastName}
              roleId={user.roleId}
            />
          </Greeting>
        </RightSide>
      </Seperate2>
      <ClientHeaderContain>
        {!!currentClient && (
          <Section2>
            <Projectsh1 data-cy="client-name">
              {currentClient.companyName}
            </Projectsh1>
            {user.roleId !== 3 && (
              <BtnCont>
                {user.roleId !== 3 && <TechModal buttonLabel="Assign Techs" />}
                {/* <NewProjBtn2 
                  data-cy="new-project"
                  
                  variant="primary"
                  >
                  </NewProjBtn2> */}
                  <NewProjectPopup to={`/client/${currentClient.id}/project/new`}/>
               
              </BtnCont>
            )}
          </Section2>
        )}
      </ClientHeaderContain>
      <Projects project={projects1} search={search} />
      <Help linkTo="ProjectListHelp" />
    </>
  );
};

export default PageHeader;
