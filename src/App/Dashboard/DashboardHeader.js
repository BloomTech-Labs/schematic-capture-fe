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
import { Link } from "react-router-dom"

const DashboardHeader = () => (
  <div>
    <h1>Dashboard</h1>
    <Link to="/client/new" variant="primary">
      New&nbsp;Client
    </Link>
  
  </div>
)
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8

export default DashboardHeader
