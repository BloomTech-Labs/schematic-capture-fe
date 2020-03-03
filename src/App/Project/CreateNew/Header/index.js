import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { BackToLink } from "../../../../shared/components";

const PageHeader = () => {
  const { currentClient } = useSelector(state => state.dashboard);

  return (
    <Fragment>
      <BackToLink
        style={{ marginBottom: "2rem" }}
        to={`/client/${currentClient.id}`}
        text={`${currentClient.companyName}`}
      />
    </Fragment>
  );
};

export default PageHeader;
