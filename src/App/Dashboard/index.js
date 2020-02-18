import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../shared/components/Navbar";
import Board from "./Board";
import Router from "./Router";

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
      <Board />
      <Router />
    </Fragment>
  );
};

export default Dashboard;
