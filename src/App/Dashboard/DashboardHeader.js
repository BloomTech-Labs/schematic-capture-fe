import React, { useState, useEffect } from "react";
import NameDropDownMenu from "../../shared/components/Components/NameDropDownMenu";
import {
  Title,
  Greeting,
  Seperate,
  RightSide,
  Profile,
  Hover,
  SearchIn,
  Buttion,
} from "../Styles/Dashboard";
import { useSelector } from "react-redux";
import Search from "../Styles/Dashboard/Search.png";
import Unknown from "../Styles/Dashboard/unknown.jpg";
import Activity from "./Activity";
import ActivityModal from "./activityPopup";

import swal from "sweetalert";
import Clients from "./Clients";

console.log(Activity, "Render Activity");

const DashboardHeader = () => {
  const user = useSelector((state) => state.auth.user);
  const client = useSelector((state) => state.dashboard.clients);
  const [editing, setEditing] = useState(false);
  const [clientout, setClient] = useState([]);
  const [search, setSearch] = useState("");

  if (user.firstName == undefined) {
    window.location.reload(false);
  }

  useEffect(() => {
    console.log(search);
    setClient(
      client.filter((input) => {
        return input.companyName.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [editing, search]);

  return (
    <>
      <Seperate>
        <Title>Schematic Capture</Title>
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
          {user.roleId !== 3 && <ActivityModal />}
          <Greeting variant="primary">
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

      <Clients clientsSrc={clientout} search={search} />
    </>
  );
};

export default DashboardHeader;
