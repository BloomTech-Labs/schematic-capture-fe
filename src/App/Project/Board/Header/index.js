import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Header, PageName, StyledLink } from "./Styles";

import BackToLink from "../../../../shared/components/BackToLink";

const PageHeader = () => {
  const { currentClient, currentProject } = useSelector(
    state => state.dashboard
  );
  return (
    <Fragment>
      <BackToLink
        style={{ marginBottom: "2rem" }}
        to={`/client/${currentClient.id}`}
        text={`${currentClient.companyName}`}
      />
      <Header>
        {!!currentProject && <PageName>{currentProject.name}</PageName>}
        <StyledLink to="/project/:id/jobsheet/new" variant="primary">
          New&nbsp;Jobsheet
        </StyledLink>
      </Header>
    </Fragment>
  );
};

export default PageHeader;
