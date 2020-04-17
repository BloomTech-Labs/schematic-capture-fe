import React from "react"
import { useSelector } from "react-redux"

import { BackToLink } from "../../../shared/components"

import {
  Projectsh1,
  NewProjBtn,
  ClientHeaderContain
} from '../../Styles/Clients'

const PageHeader = () => {
  const { currentClient } = useSelector(state => state.dashboard)
  return (
    <>
      <BackToLink
        style={{ marginBottom: "2rem" }}
        to="/dashboard"
        text="Dashboard"
      />
      <ClientHeaderContain>
        {!!currentClient && (
          <>
            <Projectsh1>{currentClient.companyName}</Projectsh1>
            <NewProjBtn
              to={`/client/${currentClient.id}/project/new`}
              variant="primary"
            >
              New&nbsp;Project
            </NewProjBtn>
          </>
        )}
      </ClientHeaderContain>
    </>
  )
}

export default PageHeader
