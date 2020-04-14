import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./ProjectHeader";
import Jobsheets from "./Jobsheets";

import { actions } from "../../../shared/actions/dashboardActions";
import { Navbar } from "../../../shared/components";
import { Main } from "./Styles";

const { SET_CURRENT_PROJECT } = actions;

const setCurrentProjectSideEffect = async (dispatch, currentProjects, id) => {
  const project = currentProjects.find(project => project.id === Number(id));

  await dispatch({ type: SET_CURRENT_PROJECT, payload: project });
};

const Board = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { currentProjects } = useSelector(state => state.dashboard);

  useEffect(() => {
    setCurrentProjectSideEffect(dispatch, currentProjects, params.id);
  }, [dispatch, currentProjects, params.id]);

  return (
    <>
      <Navbar />
      <Main>
        <Header />
        <Jobsheets />
      </Main>
    </>
  );
};

export default Board;
