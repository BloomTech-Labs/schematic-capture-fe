import React from "react"
import { useSelector } from "react-redux"

import BackToLink from "../../../shared/components/Components/BackToLink"

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
