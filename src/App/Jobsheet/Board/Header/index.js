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
        to={`/project/${currentProject.id}`}
        text={`${currentProject.name}`}
      />
      <Header>
        {!!currentProject && (
          <Fragment>
            <PageName>{currentProject.name}</PageName>
            <StyledLink
              to={`/project/${currentClient.id}/jobsheet/new`}
              variant="primary"
            >
              New&nbsp;Component
            </StyledLink>
          </Fragment>
        )}
      </Header>
    </Fragment>
  );
};

export default PageHeader;
