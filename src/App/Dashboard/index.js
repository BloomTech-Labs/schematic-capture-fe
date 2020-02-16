import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Navbar";

import { dispatchers } from "../../shared/actions/dashboardActions";

const { fetchClients } = dispatchers;

const Dashboard = () => {
  const dispatch = useDispatch();
  const clients = useSelector(state => state.dashboard.clients);

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return (
    <Fragment>
      <NavBar />
      <h1>You made it to the dashboard!</h1>
      <Link to="/client/new">Create New Client</Link>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {clients.map(client => (
          <Link key={client.id} to={`/client/${client.id}`}>
            <pre>{JSON.stringify(client, null, 2)}</pre>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Dashboard;
