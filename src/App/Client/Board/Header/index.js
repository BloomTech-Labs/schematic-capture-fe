import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Header, PageName } from "./Styles";

import BackToLink from "../../../../shared/components/BackToLink";

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
        {!!currentClient && <PageName>{currentClient.companyName}</PageName>}
      </Header>
    </Fragment>
  );
};

export default PageHeader;
