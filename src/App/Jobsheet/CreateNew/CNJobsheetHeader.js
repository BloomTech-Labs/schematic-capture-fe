import React from "react"
import { useSelector } from "react-redux"

import { BackToLink } from "../../../shared/components"

import {
  Title,
  Greeting,
  Seperate,
  RightSide,
  Profile,
  Hover
} from '../../Styles/Dashboard'
import { Bread } from '../../Styles/Project'
import { Column } from '../../Styles/Client'

import Search from '../../Styles/Dashboard/Search.png'
import Swirl from '../../Styles/Dashboard/synchronize 1.png'
import Unknown from '../../Styles/Dashboard/unknown.jpg'

import swal from "sweetalert"

const PageHeader = () => {
  const { currentProject, currentClient } = useSelector(
    state => state.dashboard
  )
  const user = useSelector(state => state.auth.user)

  const onLogout = () => {
    localStorage.removeItem("idToken")
    localStorage.removeItem("user")
    localStorage.removeItem("state")
    window.location.reload(false)
    return swal("Logged out successfully!", {
      icon: "success",
      timer: 4000
    })
  }

  return (
    <>
      <Seperate>
        <Column>
          <Title>Schematic Capture</Title>
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
        </Column>
        <br />
        <RightSide>
          <Hover src={Swirl} />
          <Hover src={Search} />
          <Greeting onClick={onLogout} variant="primary">
            Hi, {user.firstName}
            <Profile src={Unknown} />
          </Greeting>
        </RightSide>
      </Seperate>
    </>
  )
}

export default PageHeader
