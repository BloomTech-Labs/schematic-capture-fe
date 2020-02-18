import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Section, SectionName, StyledLink } from "./Styles";

import {
  dispatchers,
  actions
} from "../../../../shared/actions/dashboardActions";

const { fetchProjects } = dispatchers;
const { SET_CURRENT_CLIENT, SET_CURRENT_PROJECTS } = actions;

const fetchProjectsSideEffect = async (dispatch, id, setProjects) => {
  await dispatch(fetchProjects(id, setProjects));
};

const setCurrentClientAndProjectsSideEffect = async (
  dispatch,
  client,
  projects
) => {
  await dispatch({ type: SET_CURRENT_CLIENT, payload: client });
  await dispatch({ type: SET_CURRENT_PROJECTS, payload: projects });
};

const Client = () => {
  const [projects, setProjects] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const clients = useSelector(state => state.dashboard.clients);
  const client = clients.find(client => client.id === Number(params.id));

  useEffect(() => {
    fetchProjectsSideEffect(dispatch, params.id, setProjects);
  }, [dispatch]);

  useEffect(() => {
    setCurrentClientAndProjectsSideEffect(dispatch, client, projects);
  }, [dispatch]);

  return client ? (
    <Section>
      {/* {!!Object.entries(client).length && (
        <Link to={`${params.id}/project/new`}>Create New Project</Link>
      )} */}
      {/* <pre>{JSON.stringify(client, null, 2)}</pre> */}
      <SectionName>Projects</SectionName>
      <div>
        {projects.map(project => (
          <StyledLink key={project.id} to={`/project/${project.id}`}>
            {project.name}
          </StyledLink>
        ))}
      </div>
    </Section>
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default Client;
