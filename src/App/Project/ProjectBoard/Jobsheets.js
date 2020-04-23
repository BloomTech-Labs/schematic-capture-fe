import React, { useEffect, useState } from "react"
import { useParams, Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { dispatchers } from "../../../shared/actions/dashboardActions"

const { fetchJobsheets } = dispatchers

const fetchJobsheetsSideEffect = async (dispatch, id, setJobsheets) => {
  await dispatch(fetchJobsheets(id, setJobsheets))
};

const Jobsheets = () => {
  const [jobsheets, setJobsheets] = useState([])
  const params = useParams()
  const dispatch = useDispatch()

  const { currentClient, currentProject } = useSelector(
    state => state.dashboard
  )

  useEffect(() => {
    fetchJobsheetsSideEffect(dispatch, params.id, setJobsheets)
  }, [])

  return !!currentProject ? (
    <section>
      <h2>All Jobsheets</h2>
      <div>
        {jobsheets.map(jobsheet => (
          <Link
            data-button-jobsheet
            key={jobsheet.id}
            to={`/jobsheet/${jobsheet.id}`}
          >
            {jobsheet.name}
          </Link>
        ))}
      </div>
    </section>
  ) : (
    <Redirect to={`/client/${currentClient.id}`} />
  )
}

export default Jobsheets
