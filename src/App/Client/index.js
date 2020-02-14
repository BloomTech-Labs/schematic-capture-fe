import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { dispatchers } from "../../shared/actions/dashboardActions";

const { fetchClients } = dispatchers;

const Clients = () => {
  const [clients, setClients] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients(setClients));
  }, []);

  return (
    <section>
      <h2>All Clients</h2>
      <div>
        {clients.map(client => (
          // <pre>{JSON.stringify(client, null, 2)}</pre>
          <div>
            <Link to={`/dashboard/clients/${client.id}`}>
              <div>{client.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
