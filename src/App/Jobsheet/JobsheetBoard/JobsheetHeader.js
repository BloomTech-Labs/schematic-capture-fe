import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CSVButton } from "../../Styles/Jobsheet/ComponetStyle";

import BackToLink from "../../../shared/components/Components/BackToLink";
import Components from "./Components";
import Help from "../../../shared/components/Components/Help";

import {
  Title,
  Greeting,
  Seperate,
  RightSide,
  Profile,
  Hover,
  SearchIn,
  Buttion,
} from "../../Styles/Dashboard";
import { Bread } from "../../Styles/Project";
import { Column } from "../../Styles/Client";
import { dispatchers } from "../../../shared/actions/dashboardActions";

import NameDropDownMenu from "../../../shared/components/Components/NameDropDownMenu";
import Search from "../../Styles/Dashboard/Search.png";
import Unknown from "../../Styles/Dashboard/unknown.jpg";

import swal from "sweetalert";

const { fetchComponents } = dispatchers;

const fetchComponentsSideEffect = async (dispatch, id) => {
  await dispatch(fetchComponents(id));
};

const PageHeader = (props) => {
  const { currentProject, currentJobsheets, currentClient } = useSelector(
    (state) => state.dashboard
  );

    console.log(currentProject, ' is the currentProject in JobsheetHeader')
    console.log(currentJobsheets, ' is the currentJobsheet in JobsheetHeader')



  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector((state) => state.auth.user);
  const components = useSelector((state) => state.dashboard.components);

  const [editing, setEditing] = useState(false);
  const [components1, setComponents1] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchComponentsSideEffect(dispatch, params.id);
  }, []);

  useEffect(() => {
    console.log(search);
    setComponents1(
      components.filter((input) => {
        return input.descriptions.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [editing, search]);

  return (
    <>
      <Seperate>
        <Column>
          <Title data-cy="schematic-capture-heading">Schematic Capture</Title>
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
            <BackToLink
              style={{ marginBottom: "2rem" }}
              to={`/project/${currentProject.id}`}
              text="Jobsheets"
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
      </Seperate>
      <div style={{ marginLeft: "35px" }}>
        {!!currentJobsheets && (
          <>
            <h1 className="Currentjobsheet">{currentJobsheets.name}</h1>
            <h4>Complete: ({currentJobsheets.tally})</h4>
          </>
        )}
      </div>

      <CSVButton>
        <a href={currentJobsheets.schematic}> View Schematic</a>
      </CSVButton>

      <Components component={components1} search={search} />
      <Help linkTo="JobsheetsHelp" />
    </>
  );
};

export default PageHeader;
