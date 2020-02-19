import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BackToLink from "../../shared/components/BackToLink";
import { dispatchers } from "../../shared/actions/dashboardActions";

import { Section, SectionName, StyledLink } from "./Styles";

const { fetchJobsheets } = dispatchers;

const Board = () => {
  const [jobsheets, setJobsheets] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const currentClient = useSelector(state => state.dashboard.currentClient);
  const currentProjects = useSelector(state => state.dashboard.currentProjects);

  const project = currentProjects.find(
    project => project.id === Number(params.id)
  );

  useEffect(() => {
    dispatch(fetchJobsheets(params.id, setJobsheets));
  }, [dispatch, params.id, setJobsheets]);

  return !!project ? (
    <Section>
      {!!Object.entries(project).length && (
        <Link to={`${params.id}/jobsheet/new`}>Create New Jobsheet</Link>
      )}
      <pre>{JSON.stringify(project, null, 2)}</pre>
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
