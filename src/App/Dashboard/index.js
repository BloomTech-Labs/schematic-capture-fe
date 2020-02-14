import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NavBar from "./Navbar";

import DropdownButton from "../../shared/components/DropdownButton";
import Router from "./Router";

import { dispatchers } from "../../shared/actions/dashboardActions";
import Modal from "../../shared/components/Modals/Modal";
import InviteReg from "../../shared/components/Modals/AdminSendInvite/InviteReg";
import SendInvite from "../../shared/components/Modals/AdminSendInvite/SendInvite";

const { fetchClients } = dispatchers;

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
  },
  {
    to: "/invitereg",
    text: "Send Invite"
  }
];

const Dashboard = () => {
  const [clients, setClients] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchClients(setClients));
  }, []);

  return (
    <Fragment>
      <NavBar />
      <h1>You made it to the dashboard!</h1>;
      <DropdownButton
        items={items}
        text="Create New"
        aria-haspopup="true"
        aria-expanded="false"
      />
      <SendInvite/>
      {clients.map(client => (
        <pre>{JSON.stringify(client, null, 2)}</pre>
      ))}
      <Router />
    </Fragment>
  );
};

export default Dashboard;
