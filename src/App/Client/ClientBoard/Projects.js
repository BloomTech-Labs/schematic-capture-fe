import React, { useEffect, useState } from "react"
import { useParams, Redirect, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

<<<<<<< HEAD
import { Section, SectionName } from "./Styles";
import { ProjectsContain, ProjectsHeader, ProjectLink } from '../../../../src/shared/components/Styles/ConsolidatedStyles';
=======
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8

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
<<<<<<< HEAD
    <Section>
      <SectionName>Projects</SectionName>
      <ProjectsHeader>

      </ProjectsHeader>
      <ProjectsContain>
        {projects.map(project => (
          <ProjectLink
=======
    <section>
      <h2>All Projects</h2>
      <div>
        {projects.map(project => (
          <Link
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8
            data-project-name
            key={project.id}
            to={`/project/${project.id}`}
          >
            {project.name}
<<<<<<< HEAD
          </ProjectLink>
        ))}
      </ProjectsContain>
    </Section>
=======
          </Link>
        ))}
      </div>
    </section>
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8
  ) : (
    <Redirect to="/dashboard" />
  )
}

export default Projects
