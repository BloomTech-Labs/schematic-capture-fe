import React, { useEffect, useState } from "react"
import { useParams, Redirect, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import {
  Projectsh2,
  LineBreak
} from '../../Styles/Clients'

import {
  dispatchers,
  actions
} from "../../../shared/actions/dashboardActions"

const { fetchProjects } = dispatchers;
const { SET_CURRENT_CLIENT, SET_CURRENT_PROJECTS } = actions

const fetchProjectsSideEffect = async (dispatch, id, setProjects) => {
  await dispatch(fetchProjects(id, setProjects))
}

const setCurrentClientAndProjectsSideEffect = async (
  dispatch,
  client,
  projects
) => {
  await dispatch({ type: SET_CURRENT_CLIENT, payload: client });
  await dispatch({ type: SET_CURRENT_PROJECTS, payload: projects });
}

const Projects = () => {
  const [projects, setProjects] = useState([])
  const params = useParams()
  const dispatch = useDispatch()

  const clients = useSelector(state => state.dashboard.clients)
  const client = clients.find(client => client.id === Number(params.id))

  useEffect(() => {
    fetchProjectsSideEffect(dispatch, params.id, setProjects)
    setCurrentClientAndProjectsSideEffect(dispatch, client, projects)
  }, [])

  return client ? (
    <>
      <Projectsh2>Projects</Projectsh2>
      <LineBreak />
      <table>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Description</th>
            <th scope='col'>Technician/s</th>
            <th scope='col'>Jobsheets</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              {console.log('project data in projects.map in Projects.js: ', project)}
              <td data-label="Project"><Link to={`/project/${project.id}`}>{project.name}</Link></td>
              <td data-label="Project"><Link to={`/project/${project.id}`}>{project.description}</Link></td>
              <td data-label="Project"><Link to={`/project/${project.id}`}>{project.technician}</Link></td>
              <td data-label="Project"><Link to={`/project/${project.id}`}>{project.jobsheets}</Link></td>
              <td data-label="Project"><Link to={`/project/${project.id}`}>{project.status}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <Redirect to="/dashboard" />
  )
}

export default Projects
