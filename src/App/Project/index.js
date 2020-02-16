import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BackToLink from "../../shared/components/BackToLink";
import { dispatchers } from "../../shared/actions/dashboardActions";

const { fetchJobsheets } = dispatchers;

const Project = () => {
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

  return project ? (
    <div>
      {!!Object.entries(project).length && (
        <Link to={`${params.id}/project/new`}>Create New Project</Link>
      )}
      <pre>{JSON.stringify(project, null, 2)}</pre>
      <h1>Jobsheets:</h1>

      <div>
        {jobsheets.map(jobsheet => (
          <pre key={jobsheet.id}>
            <Link>{JSON.stringify(jobsheet, null, 2)}</Link>
          </pre>
        ))}
      </div>

      <BackToLink
        to={`/client/${currentClient.id}`}
        text={`${currentClient.companyName}`}
      />
    </div>
  ) : (
    <Redirect to={`/client/${currentClient.id}`} />
  );
};

export default Project;
