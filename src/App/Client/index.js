import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { dispatchers, actions } from "../../shared/actions/dashboardActions";
import BackToLink from "../../shared/components/BackToLink";

const { fetchProjects } = dispatchers;
const { SET_CURRENT_CLIENT, SET_CURRENT_PROJECTS } = actions;

const Client = () => {
  const [projects, setProjects] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const clients = useSelector(state => state.dashboard.clients);
  const client = clients.find(client => client.id === Number(params.id));

  const fetchProjectsSideEffect = async () => {
    await dispatch(fetchProjects(params.id, setProjects));
  };

  useEffect(() => {
    fetchProjectsSideEffect();
  }, [params.id, dispatch]);

  useEffect(() => {
    dispatch({ type: SET_CURRENT_CLIENT, payload: client });
    dispatch({ type: SET_CURRENT_PROJECTS, payload: projects });
  }, [client, projects]);

  return client ? (
    <div>
      {!!Object.entries(client).length && (
        <Link to={`${params.id}/project/new`}>Create New Project</Link>
      )}
      <pre>{JSON.stringify(client, null, 2)}</pre>
      <h2>Projects:</h2>
      <div>
        {projects.map(project => (
          <pre key={project.id}>
            <Link to={`/project/${project.id}`}>
              {JSON.stringify(project, null, 2)}
            </Link>
          </pre>
        ))}
      </div>

      <BackToLink to="/dashboard" text="Dashboard" />
    </div>
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default Client;
