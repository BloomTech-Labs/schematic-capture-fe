import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Header, PageName } from "./Styles";

import BackToLink from "../../../../shared/components/BackToLink";

const PageHeader = () => {
  const { currentProject, currentJobsheet } = useSelector(
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
        {!!currentJobsheet && (
          <Fragment>
            <PageName>{currentJobsheet.name}</PageName>
          </Fragment>
        )}
      </Header>
    </Fragment>
  );
};

export default PageHeader;
