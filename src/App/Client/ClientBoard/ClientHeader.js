import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

<<<<<<< HEAD
import { StyledLink } from "./Styles";
import { Header, PageName } from '../../../../src/shared/components/Styles/ConsolidatedStyles'

import { Main } from '../../../../src/shared/components/Styles/ConsolidatedStyles'

import { BackToLink } from "../../../shared/components";
=======
import { BackToLink } from "../../../shared/components"
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8

const PageHeader = () => {
  const { currentClient } = useSelector(state => state.dashboard);
  return (
    <Main>
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
<<<<<<< HEAD
      </Header>
    </Main>
=======
      </div>
    </>
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8
  );
};

export default PageHeader;
