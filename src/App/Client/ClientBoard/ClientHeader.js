import React from "react";
import { useSelector } from "react-redux";

import { StyledLink } from "./Styles";
import { Header, PageName } from '../../../../src/shared/components/Styles/ConsolidatedStyles'

import { Main } from '../../../../src/shared/components/Styles/ConsolidatedStyles'

import { BackToLink } from "../../../shared/components";

const PageHeader = () => {
  const { currentClient } = useSelector(state => state.dashboard);
  return (
    <Main>
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
    </Main>
  );
};

export default PageHeader;
