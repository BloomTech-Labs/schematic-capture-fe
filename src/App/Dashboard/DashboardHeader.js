import React from "react"
import {
  Title,
  Greeting,
  Seperate
} from '../Styles/Dashboard'

const DashboardHeader = () => (
  <Seperate>
    <Title>Schematic Capture</Title>
    <div>
      <Greeting to="/profile" variant="primary">
        Hi, Name
      </Greeting>
    </div>
  </Seperate>
)

export default DashboardHeader
