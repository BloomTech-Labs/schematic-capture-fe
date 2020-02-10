import React, { Fragment } from "react";
import NavBar from "../components/layout/Navbar";

import DropdownButton from "./DropdownButton";

const items = [
  {
    to: "/invite/admin",
    text: "Administration"
  },
  {
    to: "/invite/employee",
    text: "Employee"
  },
  {
    to: "/invite/technician",
    text: "Technician"
  }
];

const Dashboard = () => {
  return (
    <Fragment>
      <NavBar />
      <h1>You made it to the dashboard!</h1>;
      <DropdownButton
        items={items}
        text="Create New"
        // buttonProps={{ variant: "secondary" }}
      />
    </Fragment>
  );
};

export default Dashboard;
