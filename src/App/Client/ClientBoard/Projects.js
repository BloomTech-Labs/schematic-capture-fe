import React, { useEffect, useState, useCallback } from "react"
import { useParams, Redirect, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

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
  FlexEnd,
  FlexEnd2,
} from "../../Styles/Client"

import { dispatchers, actions } from "../../../shared/actions/dashboardActions"

const { fetchProjects, fetchJobsheets } = dispatchers
const { SET_CURRENT_CLIENT, SET_CURRENT_PROJECTS } = actions

const fetchProjectsSideEffect = async (dispatch, id, setProjects) => {
  await dispatch(fetchProjects(id, setProjects))
}

const fetchJobsheetsSideEffect = async (dispatch, id, setJobsheets) => {
  await dispatch(fetchJobsheets(id, setJobsheets))
}

const setCurrentClientAndProjectsSideEffect = async (
  dispatch,
  client,
  projects
) => {
  await dispatch({ type: SET_CURRENT_CLIENT, payload: client })
  await dispatch({ type: SET_CURRENT_PROJECTS, payload: projects })
}

const Projects = props => {
  const [projects, setProjects] = useState([])
  const [jobsheets, setJobsheets] = useState([]);
  const params = useParams()
  const dispatch = useDispatch()

  const clients = useSelector((state) => state.dashboard.clients)
  const client = clients.find((client) => client.id === Number(params.id))
  const { currentJobsheets } = useSelector(state => state.dashboard)
  const { currentProjects } = useSelector(state => state.dashboard)

  useEffect(() => {
    fetchProjectsSideEffect(dispatch, params.id, setProjects)
    setCurrentClientAndProjectsSideEffect(dispatch, client, projects)
  }, [])


  console.log('McSwaggies',currentProjects)
  const projIDArray = currentProjects.map((Proj) => 
        { return Proj.id; });
        console.log('McDaddies',projIDArray)
  function getJobsheets(projectID) {
 
  

    let newArray = currentJobsheets.filter((elements)=>{
      return elements.projectId === projectID;});
      // return newArray;

       function CompleteCounter(newArray) {
        let completed = newArray.filter((x) => x.completed === true);
        let counter = {
          
          complete: completed.length,
          total: newArray.length,
        };
        return counter;
      }
      return CompleteCounter(newArray);
  }

  function getTechnicians(projectID) {

    let newArray = currentJobsheets.filter((elements)=>{
      return elements.projectId === projectID;});
      // return newArray;

       function GetTech(newArray) {
        const techArray = newArray.map((jobSh) => 
        { return jobSh.userEmail; });
        return techArray;
      }
      return GetTech(newArray);
  }


  //Assigns project array value either from dispatch or from search
  var projectArray;
  if (props.search.length > 0){
    projectArray = props.project
  } else {
    projectArray = projects
  }
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
          <tbody>
            {projectArray.map(project => (
              <StyledTableRow key={project.id}>
                {console.log('project data in projects.map in Projects.js: ', project)}
                <StyledTableData data-label="Project"><ProjectLinkName to={`/project/${project.id}`}>{project.name}</ProjectLinkName></StyledTableData>
                <StyledTableData data-label="Project"><ProjectLink to={`/project/${project.id}`}>{project.description}</ProjectLink></StyledTableData>
                <StyledTableData data-label="Project"><ProjectLink to={`/project/${project.id}`}>{getTechnicians(project.id)}</ProjectLink></StyledTableData>
                <StyledTableData data-label="Project"><ProjectLink to={`/project/${project.id}`}>{getJobsheets(project.id).complete}/{getJobsheets(project.id).total}</ProjectLink></StyledTableData>
                <StyledTableData data-label="Project"><ProjectLink to={`/project/${project.id}`}><StyledTableData>
                {project.completed !== 1  ? (
                    <FlexEnd>Incomplete</FlexEnd>
                  ) : (
                    <FlexEnd2>Complete</FlexEnd2>
                  )}
                </StyledTableData></ProjectLink></StyledTableData>
              </StyledTableRow>
            ))}
          </tbody> 
      </ProjectsTable>
    </Section>
  ) : (
    <Redirect to="/dashboard" />
  )
}

export default Projects
