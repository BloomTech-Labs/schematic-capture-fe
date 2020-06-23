import React from "react";
import { useSelector } from "react-redux";

import { BackToLink } from "../../../shared/components";
import NameDropDownMenu from "../../../shared/components/Components/NameDropDownMenu";

import {
  Title,
  Greeting,
  Seperate,
  RightSide,
  Profile,
  Hover,
} from "../../Styles/Dashboard";
import { Bread } from "../../Styles/Project";
import { Column } from "../../Styles/Client";

import Search from "../../Styles/Dashboard/Search.png";
import Swirl from "../../Styles/Dashboard/synchronize 1.png";
import Unknown from "../../Styles/Dashboard/unknown.jpg";

const PageHeader = () => {
  const { currentClient } = useSelector((state) => state.dashboard);
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Seperate>
        <Column>
          <Title data-cy="schematic-capture-heading">Schematic Capture</Title>
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
          <Hover data-cy="search" src={Search} />
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
    </>
  );
};

export default PageHeader;
