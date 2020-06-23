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
  const { currentProject, currentJobsheet, currentClient } = useSelector(
    (state) => state.dashboard
  );
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
      <div style={{ margin: "0 20rem"}}>
        {!!currentJobsheet && (
          <>
            <h1 className="Currentjobsheet">{currentJobsheet.name}</h1>
            <h4>Complete: ({currentJobsheet.tally})</h4>
          </>
        )}
      </div>

      <CSVButton style={{position: "relative", left: "40rem", top: "-5.8rem"}}>
        <a href={currentJobsheet.schematic}> View Schematic</a>
      </CSVButton>

      <Components component={components1} search={search} />
      <Help linkTo="JobsheetsHelp" />
    </>
  );
};

export default PageHeader;
