import React, { useEffect } from "react"
import {
  Title,
  Greeting,
  Seperate,
  RightSide,
  Profile,
  Hover
} from '../Styles/Dashboard'
import { useSelector } from "react-redux"
import Search from '../Styles/Dashboard/Search.png'
import Swirl from '../Styles/Dashboard/synchronize 1.png'
import Unknown from '../Styles/Dashboard/unknown.jpg'

import swal from "sweetalert"

const DashboardHeader = () => {
  const user = useSelector(state => state.auth.user)

  if(user.firstName == undefined){
    window.location.reload(false)
  }

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

  return(
    <Seperate>
      <Title>Schematic Capture</Title>
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
  )
}

export default DashboardHeader
