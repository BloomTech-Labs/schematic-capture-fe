import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { BackToLink } from "../../../shared/components"

const PageHeader = () => {
  const { currentClient } = useSelector(state => state.dashboard);
  return (
    <>
      <BackToLink
        style={{ marginBottom: "2rem" }}
        to="/dashboard"
        text="Dashboard"
      />
      <div>
        {!!currentClient && (
          <>
            <h1>{currentClient.companyName}</h1>
            <Link
              to={`/client/${currentClient.id}/project/new`}
              variant="primary"
            >
              New&nbsp;Project
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default PageHeader;
