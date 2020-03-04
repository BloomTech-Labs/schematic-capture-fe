import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Header, PageName, StyledLink, StyledInput } from "./Styles";
import { dispatchers } from "../../../../shared/actions/dashboardActions";
import { BackToLink } from "../../../../shared/components";

const { updateProjectName } = dispatchers;

const PageHeader = () => {
  const currentClient = useSelector(state => state.dashboard.currentClient);

  const currentProject = useSelector(state => state.dashboard.currentProject);

  const [isEditing, setIsEditing] = useState(false);
  const [projectName, setProjectName] = useState(
    !!currentProject ? currentProject.name : ""
  );
  const dispatch = useDispatch();

  const handleProjectNameChange = event => {
    setProjectName(event.target.value);
  };

  const saveProjectName = event => {
    event.preventDefault();
    dispatch(updateProjectName(projectName, setIsEditing));
  };

  return (
    <Fragment>
      <BackToLink
        style={{ marginBottom: "2rem" }}
        to={`/client/${currentClient.id}`}
        text={`${currentClient.companyName}`}
      />
      <Header>
        {!!currentProject && (
          <Fragment>
            {isEditing ? (
              <div style={{ display: "flex" }}>
                <StyledInput
                  placeholder="Project Name"
                  type="text"
                  value={projectName}
                  onChange={handleProjectNameChange}
                />
                <StyledLink
                  style={{ marginRight: "1rem" }}
                  onClick={saveProjectName}
                >
                  Save
                </StyledLink>
              </div>
            ) : (
              <PageName onClick={() => setIsEditing(true)}>
                {projectName}
              </PageName>
            )}
            <StyledLink
              to={`/project/${currentClient.id}/jobsheet/new`}
              variant="primary"
            >
              New&nbsp;Jobsheet
            </StyledLink>
          </Fragment>
        )}
      </Header>
    </Fragment>
  );
};

export default PageHeader;
