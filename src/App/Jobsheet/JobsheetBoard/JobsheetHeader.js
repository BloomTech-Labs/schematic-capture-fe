import React from "react"
import { useSelector } from "react-redux"

import BackToLink from "../../../shared/components/Components/BackToLink"

import {Bread} from '../../Styles/Project'

const PageHeader = () => {
  const { currentProject, currentJobsheet, currentClient } = useSelector(
    state => state.dashboard
  );
  return (
    <>
    <Bread>
        <BackToLink
          style={{ marginBottom: "2rem" }}
          to="/dashboard"
          text="Home"
        />
        <BackToLink
          style={{ marginBottom: "2rem" }}
          to={`/client/${currentClient.id}`}
          text='Clients'
        />
        <BackToLink
        style={{ marginBottom: "2rem" }}
        to={`/project/${currentProject.id}`}
        text='Projects'
      />
      </Bread>
      <div>
        {!!currentJobsheet && (
          <>
            <h1>{currentJobsheet.name}</h1>
          </>
        )}
      </div>
    </>
  )
}

export default PageHeader
