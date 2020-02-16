import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { dispatchers } from "../../shared/actions/dashboardActions";
import BackToLink from "../../shared/components/BackToLink";

const { fetchProjects } = dispatchers;

const Client = () => {
  const [projects, setProjects] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const clients = useSelector(state => state.dashboard.clients);
  const client = clients.find(client => client.id === Number(params.id));

  useEffect(() => {
    dispatch(fetchProjects(params.id, setProjects));
  }, [params.id, dispatch]);

  return client ? (
    <div>
      {!!Object.entries(client).length && (
        <Link to={`${params.id}/project/new`}>Create New Project</Link>
      )}
      <pre>{JSON.stringify(client, null, 2)}</pre>
      <h2>Projects:</h2>
      <div>
        {projects.map(project => (
          <Link to={`/project/${project.id}`}>
            <pre key={project.id}>{JSON.stringify(project, null, 2)}</pre>
          </Link>
        ))}
      </div>

      <BackToLink to="/dashboard" text="Dashboard" />
    </div>
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default Client;
