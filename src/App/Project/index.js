import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BackToLink from "../../shared/components/BackToLink";
import { actions, dispatchers } from "../../shared/actions/dashboardActions";

import { Section, SectionName, StyledLink } from "./Styles";

const { fetchJobsheets } = dispatchers;
const { SET_CURRENT_PROJECT } = actions;

const setCurrentProjectSideEffect = async (dispatch, currentProjects, id) => {
  const project = currentProjects.find(project => project.id === Number(id));

  await dispatch({ type: SET_CURRENT_PROJECT, payload: project });
};

const fetchJobsheetsSideEffect = async (dispatch, id, setJobsheets) => {
  await dispatch(fetchJobsheets(id, setJobsheets));
};

const Board = () => {
  const [jobsheets, setJobsheets] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const { currentClient, currentProjects, currentProject } = useSelector(
    state => state.dashboard
  );

  useEffect(() => {
    setCurrentProjectSideEffect(dispatch, currentProjects, params.id);
    fetchJobsheetsSideEffect(dispatch, params.id, setJobsheets);
  }, [dispatch, currentProjects, params.id, setJobsheets]);

  return !!currentProject ? (
    <Section>
      {!!Object.entries(currentProject).length && (
        <Link to={`${params.id}/jobsheet/new`}>Create New Jobsheet</Link>
      )}
      <pre>{JSON.stringify(currentProject, null, 2)}</pre>
      <SectionName>Jobsheets</SectionName>

      <div>
        {jobsheets.map(jobsheet => (
          <pre key={jobsheet.id}>
            <StyledLink to={`/jobsheet/${jobsheet.id}`}>
              {JSON.stringify(jobsheet, null, 2)}
            </StyledLink>
          </pre>
        ))}
      </div>

      <BackToLink
        to={`/client/${currentClient.id}`}
        text={`${currentClient.companyName}`}
      />
    </Section>
  ) : (
    <Redirect to={`/client/${currentClient.id}`} />
  );
};

export default Board;
