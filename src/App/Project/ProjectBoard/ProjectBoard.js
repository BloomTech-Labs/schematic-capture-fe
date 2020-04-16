import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

<<<<<<< HEAD
import Header from "./ProjectHeader";
import Jobsheets from "./Jobsheets";

import { actions } from "../../../shared/actions/dashboardActions";
import { Main } from "./Styles";
=======
import Header from "./ProjectHeader"
import Jobsheets from "./Jobsheets"
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8

import { actions } from "../../../shared/actions/dashboardActions"
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
<<<<<<< HEAD
      <Main>
=======
      <main>
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8
        <Header />
        <Jobsheets />
      </main>
    </>
  )
}

export default Board
