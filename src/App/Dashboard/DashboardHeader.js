import React from "react"
import {
  Title,
  Greeting,
  Seperate,
  RightSide,
  Profile,
  Hover
} from '../Styles/Dashboard'
import Search from '../Styles/Dashboard/Search.png'
import Swirl from '../Styles/Dashboard/synchronize 1.png'
import Unknown from '../Styles/Dashboard/unknown.jpg'

const DashboardHeader = () => (
  <Seperate>
    <Title>Schematic Capture</Title>
    <RightSide>
      <Hover src={Swirl} />
      <Hover src={Search} />
      <Greeting to="/profile" variant="primary">
        Hi, Name
        <Profile src={Unknown} />
      </Greeting>
      
    </RightSide>
  </Seperate>
)

export default DashboardHeader
