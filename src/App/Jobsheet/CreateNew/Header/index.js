import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { BackToLink } from "../../../../shared/components";

const PageHeader = () => {
  const { currentProject } = useSelector(state => state.dashboard);
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
