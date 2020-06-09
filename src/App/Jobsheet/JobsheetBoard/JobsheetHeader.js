import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BackToLink from "../../../shared/components/Components/BackToLink";
import Components from "./Components";

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
      <Seperate>
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
            <BackToLink
              style={{ marginBottom: "2rem" }}
              to={`/project/${currentProject.id}`}
              text="Jobsheets"
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
      </Seperate>
      <div style={{ marginLeft: "35px" }}>
        {!!currentJobsheet && (
          <>
            <h1 className="Currentjobsheet">{currentJobsheet.name}</h1>
            <h4>
                  Complete: ({currentJobsheet.tally})
                </h4>
            <a href={currentJobsheet.schematic}>Link to Schematic</a>
          </>
        )}
      </div>
      <Components component={components1} search={search} />
    </>
  );
};

export default PageHeader;
