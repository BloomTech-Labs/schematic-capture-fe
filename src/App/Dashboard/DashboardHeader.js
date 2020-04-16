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

export default DashboardHeader
