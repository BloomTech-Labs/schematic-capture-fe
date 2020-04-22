import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { dispatchers } from "../../../shared/actions/dashboardActions";

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
  FlexEnd2,
} from "../../Styles/Jobsheets";

const { fetchJobsheets } = dispatchers;

const fetchJobsheetsSideEffect = async (dispatch, id, setJobsheets) => {
  await dispatch(fetchJobsheets(id, setJobsheets));
};

const Jobsheets = () => {
  const [jobsheets, setJobsheets] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const { currentClient, currentProject } = useSelector(
    (state) => state.dashboard
  );

  useEffect(() => {
    fetchJobsheetsSideEffect(dispatch, params.id, setJobsheets);
  }, []);

  return !!currentProject ? (
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

        {jobsheets.map((jobsheet) => (
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
              {jobsheet.status === "Unassigned" ? (
                <FlexEnd>{jobsheet.status}</FlexEnd>
              ) : (
                <FlexEnd2>{jobsheet.status}</FlexEnd2>
              )}
            </StyledTableData>
          </StyledTableRow>
        ))}
      </ProjectsTable>
    </Section>
  ) : (
    <Redirect to={`/client/${currentClient.id}`} />
  );
};

export default Jobsheets;
