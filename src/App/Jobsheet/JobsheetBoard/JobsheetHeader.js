import React from "react";
import { useSelector } from "react-redux";

import { Header, PageName } from "./Styles";

import BackToLink from "../../../shared/components/Components/BackToLink";

const PageHeader = () => {
  const { currentProject, currentJobsheet } = useSelector(
    state => state.dashboard
  );
  return (
    <>
      <BackToLink
        style={{ marginBottom: "2rem" }}
        to={`/project/${currentProject.id}`}
        text={`${currentProject.name}`}
      />


      <Header>
        {!!currentJobsheet && (
          <>
            <PageName>{currentJobsheet.name}</PageName>
          </>
        )}
      </Header>
    </>
  );
};

export default PageHeader;
