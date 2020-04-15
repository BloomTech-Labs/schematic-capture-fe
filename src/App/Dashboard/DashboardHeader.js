import React from "react";

import { Header, DashboardName, StyledLink } from "./Styles";

const DashboardHeader = () => (
  <Header>
    <DashboardName>Dashboard</DashboardName>
    <StyledLink to="/client/new" variant="primary">
      New&nbsp;Client
    </StyledLink>
  
  </Header>
);

export default DashboardHeader;
