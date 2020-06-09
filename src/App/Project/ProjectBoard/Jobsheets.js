import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

const Jobsheets = (props) => {
  const [jobsheets, setJobsheets] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const { currentClient, currentProject } = useSelector(
    (state) => state.dashboard
  );

  useEffect(() => {
    fetchJobsheetsSideEffect(dispatch, params.id, setJobsheets);
  }, []);
  useEffect(() => {
    incompleteCounter();
  }, [jobsheets]);

  function incompleteCounter() {
    let newarr = jobsheets.filter((x) => x.status === "Unassigned");
    props.setCounter({
      ...props.counter,
      incomplete: newarr.length,
      total: jobsheets.length,
    });
  }

  //Assigns jobsheet array value either from dispatch or from search
  var jobsheetArray;
  if (props.search.length > 0) {
    jobsheetArray = props.jobsheet;
  } else {
    jobsheetArray = jobsheets;
  }

  return (
    <Section>
      <Projectsh2 data-cy="all-jobsheets-header">All Jobsheets</Projectsh2>
      <LineBreak />

      <ProjectsTable>
        <thead>
          <StyledTableRow>
            <StyledTableHead scope="col">Name</StyledTableHead>
            <StyledTableHead scope="col" data-cy="jobsheet-table">
              Description
            </StyledTableHead>
            <StyledTableHead scope="col">Techs</StyledTableHead>
            <StyledTableHead scope="col">Components</StyledTableHead>
            <StyledTableHead scope="col">Status</StyledTableHead>
          </StyledTableRow>
        </thead>
        <tbody>
          {jobsheetArray.map((jobsheet) => (
            <StyledTableRow key={jobsheet.id}>
              <StyledTableData data-cy="jobsheet-table-name">
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
                  {jobsheet.description}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData>
                <ProjectLink
                  data-button-jobsheet
                  key={jobsheet.id}
                  to={`/jobsheet/${jobsheet.id}`}
                >
                  {/* Revise: Possibly change jobsheet.userEmail to map through an array is more than 1 tech */}
                  {jobsheet.userEmail}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData>
                <ProjectLink
                  data-button-jobsheet
                  key={jobsheet.id}
                  to={`/jobsheet/${jobsheet.id}`}
                >
                  {jobsheet.tally}
                </ProjectLink>
              </StyledTableData>
              <StyledTableData data-cy="jobsheet-table-status">
                {jobsheet.completed !== true ? (
                  <FlexEnd>Incomplete</FlexEnd>
                ) : (
                  <FlexEnd2>Complete</FlexEnd2>
                )}
              </StyledTableData>
            </StyledTableRow>
          ))}
        </tbody>
      </ProjectsTable>
    </Section>
  );
};

export default Jobsheets;
