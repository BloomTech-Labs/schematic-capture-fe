import React from "react"
import { useSelector } from "react-redux"

import { BackToLink } from "../../../shared/components"

const PageHeader = () => {
  const { currentClient } = useSelector(state => state.dashboard)

  return (
    <>
      <div>
        <BackToLink
          style={{ marginBottom: "2rem" }}
          to="/dashboard"
          text="Home -"
        />
        <BackToLink
          style={{ marginBottom: "2rem" }}
          to={`/client/${currentClient.id}`}
          text={'Clients'}
        />
      </div>
    </>
  )
}

export default PageHeader
