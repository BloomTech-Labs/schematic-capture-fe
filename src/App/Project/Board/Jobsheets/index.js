import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Section, SectionName, StyledLink } from "./Styles";

import { dispatchers } from "../../../../shared/actions/dashboardActions";

const { fetchJobsheets } = dispatchers;

const fetchJobsheetsSideEffect = async (dispatch, id, setJobsheets) => {
  await dispatch(fetchJobsheets(id, setJobsheets));
};

const Jobsheets = () => {
  const [jobsheets, setJobsheets] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const { currentClient, currentProject } = useSelector(
    state => state.dashboard
  );

  useEffect(() => {
    fetchJobsheetsSideEffect(dispatch, params.id, setJobsheets);
  }, [dispatch, params.id, setJobsheets]);

  return !!currentProject ? (
    <Section>
      <SectionName>All Jobsheets</SectionName>
      <div>
        {jobsheets.map(jobsheet => (
          <div>
            <StyledLink key={jobsheet.id} to={`/jobsheet/${jobsheet.id}`}>
              {jobsheet.name}
            </StyledLink>
          </div>
        ))}
      </div>
    </Section>
  ) : (
    <Redirect to={`/client/${currentClient.id}`} />
  );
};

export default Jobsheets;
