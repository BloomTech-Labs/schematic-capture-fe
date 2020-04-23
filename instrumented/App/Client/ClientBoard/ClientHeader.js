import React from "react";
import { useSelector } from "react-redux";

import { Header, PageName, StyledLink } from "./Styles";

import { BackToLink } from "../../../shared/components";

const PageHeader = () => {
  const { currentClient } = useSelector(state => state.dashboard);
  return (
    <>
      <BackToLink
        style={{ marginBottom: "2rem" }}
        to="/dashboard"
        text="Dashboard"
      />
      <Header>
        {!!currentClient && (
          <>
            <PageName>{currentClient.companyName}</PageName>
            <StyledLink
              to={`/client/${currentClient.id}/project/new`}
              variant="primary"
            >
              New&nbsp;Project
            </StyledLink>
          </>
        )}
      </Header>
    </>
  );
};

export default PageHeader;
