import React, { useEffect, useState } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Projectsh2,
  LineBreak,
  Section,
  ProjectsTable,
  StyledTableHead,
  StyledTableRow,
  StyledTableData,
  ProjectLink,
  ProjectLinkName,
} from "../../Styles/Client";

import { dispatchers, actions } from "../../../shared/actions/dashboardActions";

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

const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const clients = useSelector((state) => state.dashboard.clients);
  const client = clients.find((client) => client.id === Number(params.id));

  useEffect(() => {
    fetchProjectsSideEffect(dispatch, params.id, setProjects);
    setCurrentClientAndProjectsSideEffect(dispatch, client, projects);
  }, []);

  return client ? (
    <Section>
      <Projectsh2>Projects</Projectsh2>
      <LineBreak />
      <ProjectsTable>
        <thead>
          <StyledTableRow>
            <StyledTableHead scope="col">Name</StyledTableHead>
            <StyledTableHead scope="col">Description</StyledTableHead>
            <StyledTableHead scope="col">Technician/s</StyledTableHead>
            <StyledTableHead scope="col">Jobsheets</StyledTableHead>
            <StyledTableHead scope="col">Status</StyledTableHead>
          </StyledTableRow>
        </thead>
        {/* Please make cleaner */}
        {props.search.length > 0 ? (
          <tbody>
            {props.project.map((project) => (
              <StyledTableRow key={project.id}>
                <StyledTableData data-label="Project">
                  <ProjectLinkName to={`/project/${project.id}`}>
                    {project.name}
                  </ProjectLinkName>
                </StyledTableData>
                <StyledTableData data-label="Project">
                  <ProjectLink to={`/project/${project.id}`}>
                    {project.description}
                  </ProjectLink>
                </StyledTableData>
                <StyledTableData data-label="Project">
                  <ProjectLink to={`/project/${project.id}`}>
                    {project.technician}
                  </ProjectLink>
                </StyledTableData>
                <StyledTableData data-label="Project">
                  <ProjectLink to={`/project/${project.id}`}>
                    {project.jobsheets}
                  </ProjectLink>
                </StyledTableData>
                <StyledTableData data-label="Project">
                  <ProjectLink to={`/project/${project.id}`}>
                    {project.status}
                  </ProjectLink>
                </StyledTableData>
              </StyledTableRow>
            ))}
          </tbody>
        ) : (
          <tbody>
            {projects.map((project) => (
              <StyledTableRow key={project.id}>
                <StyledTableData data-label="Project">
                  <ProjectLinkName to={`/project/${project.id}`}>
                    {project.name}
                  </ProjectLinkName>
                </StyledTableData>
                <StyledTableData data-label="Project">
                  <ProjectLink to={`/project/${project.id}`}>
                    {project.description}
                  </ProjectLink>
                </StyledTableData>
                <StyledTableData data-label="Project">
                  <ProjectLink to={`/project/${project.id}`}>
                    {project.technician}
                  </ProjectLink>
                </StyledTableData>
                <StyledTableData data-label="Project">
                  <ProjectLink to={`/project/${project.id}`}>
                    {project.jobsheets}
                  </ProjectLink>
                </StyledTableData>
                <StyledTableData data-label="Project">
                  <ProjectLink to={`/project/${project.id}`}>
                    {project.status}
                  </ProjectLink>
                </StyledTableData>
              </StyledTableRow>
            ))}
          </tbody>
        )}
      </ProjectsTable>
    </Section>
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default Projects;
