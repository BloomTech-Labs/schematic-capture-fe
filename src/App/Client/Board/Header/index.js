import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Header, PageName, StyledLink } from "./Styles";

import { BackToLink } from "../../../../shared/components";

const PageHeader = () => {
  const { currentClient } = useSelector(state => state.dashboard);
  return (
    <Fragment>
      <BackToLink
        style={{ marginBottom: "2rem" }}
        to="/dashboard"
        text="Dashboard"
      />
      <Header>
        {!!currentClient && (
          <Fragment>
            <PageName>{currentClient.companyName}</PageName>
            <StyledLink
              to={`/client/${currentClient.id}/project/new`}
              variant="primary"
            >
              New&nbsp;Project
            </StyledLink>
          </Fragment>
        )}
      </Header>
    </Fragment>
  );
};

export default PageHeader;
