import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

import { dispatchers } from "../../../shared/actions/dashboardActions"

import {
  Projectsh2,
  LineBreak,
  Section,
  ProjectsTable,
  StyledTableHead,
  StyledTableRow,
  StyledTableData,
  ProjectLink,
  FlexEnd,
} from "../../Styles/Jobsheets"

const { fetchJobsheets } = dispatchers

const fetchJobsheetsSideEffect = async (dispatch, id, setJobsheets) => {
  await dispatch(fetchJobsheets(id, setJobsheets))
}

const Jobsheets = props => {
  const [jobsheets, setJobsheets] = useState([])
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    fetchJobsheetsSideEffect(dispatch, params.id, setJobsheets)
  }, [])

  return (
    <Section>
      <Projectsh2>All Jobsheets</Projectsh2>
      <LineBreak />
      <ProjectsTable>
        <StyledTableRow>
          <StyledTableHead scope="col">Name</StyledTableHead>
          <StyledTableHead scope="col">Description</StyledTableHead>
          <StyledTableHead scope="col">Techs</StyledTableHead>
          <StyledTableHead scope="col">Status</StyledTableHead>
        </StyledTableRow>
        {props.search.length>0 ? 
          props.jobsheet.map((jobsheet) => (
            <StyledTableRow>
              {console.log(jobsheet)}
              <StyledTableData>
                <ProjectLink
                  data-button-jobsheet
                  key={jobsheet.id}
                  to={`/jobsheet/${jobsheet.id}`}
                >
                  {jobsheet.name}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData>
                <ProjectLink
                  data-button-jobsheet
                  key={jobsheet.id}
                  to={`/jobsheet/${jobsheet.id}`}
                >
                  {jobsheet.technician}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData>
                <ProjectLink
                  data-button-jobsheet
                  key={jobsheet.id}
                  to={`/jobsheet/${jobsheet.id}`}
                >
                  {jobsheet.description}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData>
                <FlexEnd>{jobsheet.status}</FlexEnd>
              </StyledTableData>
            </StyledTableRow>
          )) :
          jobsheets.map((jobsheet) => (
            <StyledTableRow>
              {console.log(jobsheet)}
              <StyledTableData>
                <ProjectLink
                  data-button-jobsheet
                  key={jobsheet.id}
                  to={`/jobsheet/${jobsheet.id}`}
                >
                  {jobsheet.name}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData>
                <ProjectLink
                  data-button-jobsheet
                  key={jobsheet.id}
                  to={`/jobsheet/${jobsheet.id}`}
                >
                  {jobsheet.technician}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData>
                <ProjectLink
                  data-button-jobsheet
                  key={jobsheet.id}
                  to={`/jobsheet/${jobsheet.id}`}
                >
                  {jobsheet.description}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData>
                <FlexEnd>{jobsheet.status}</FlexEnd>
              </StyledTableData>
            </StyledTableRow>
          ))
        }
      </ProjectsTable>
    </Section>
  ) 
}

export default Jobsheets;
