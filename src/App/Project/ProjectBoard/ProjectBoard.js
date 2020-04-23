import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./ProjectHeader";

import { actions } from "../../../shared/actions/dashboardActions";
const { SET_CURRENT_PROJECT } = actions;

const setCurrentProjectSideEffect = async (dispatch, currentProjects, id) => {
  const project = currentProjects.find((project) => project.id === Number(id));

  await dispatch({ type: SET_CURRENT_PROJECT, payload: project });
};

const Board = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState({
    incomplete: 0,
    total: 0,
  });

  const { currentProjects } = useSelector((state) => state.dashboard);

  useEffect(() => {
    setCurrentProjectSideEffect(dispatch, currentProjects, params.id);
  }, [dispatch, currentProjects, params.id]);

  return (
    <>
      <Header counter={counter} setCounter={setCounter}/>
    </>
  );
};

export default Board;
