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
    </Fragment>
  );
};

export default PageHeader;
