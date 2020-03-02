import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../shared/actions/dashboardActions";
import { Navbar } from "../../shared/components";
import Board from "./Board";

const { SET_CURRENT_JOBSHEET } = actions;

const setCurrentJobsheetSideEffect = async (dispatch, currentJobsheets, id) => {
  const jobsheet = currentJobsheets.find(
    jobsheet => jobsheet.id === Number(id)
  );

  await dispatch({ type: SET_CURRENT_JOBSHEET, payload: jobsheet });
};

const Jobsheet = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { currentJobsheets } = useSelector(state => state.dashboard);

  useEffect(() => {
    setCurrentJobsheetSideEffect(dispatch, currentJobsheets, params.id);
  }, [dispatch, currentJobsheets, params.id]);

  return (
    <Fragment>
      <Navbar />
      <Board />
    </Fragment>
  );
};

export default Jobsheet;
