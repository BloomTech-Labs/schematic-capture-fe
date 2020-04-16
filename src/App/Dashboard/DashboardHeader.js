<<<<<<< HEAD
import React from "react";

import { Header, DashboardName } from "./Styles";

const DashboardHeader = () => (
  <Header>
    <DashboardName>Schematic Capture</DashboardName>
  </Header>
);
=======
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
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8

export default DashboardHeader
