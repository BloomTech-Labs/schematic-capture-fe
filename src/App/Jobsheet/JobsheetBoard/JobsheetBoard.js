import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

<<<<<<< HEAD
import Header from "./JobsheetHeader";
import Components from "./Components";
import { actions } from "../../../shared/actions/dashboardActions";
=======
import Header from "./JobsheetHeader"
import Components from "./Components"
import { actions } from "../../../shared/actions/dashboardActions"
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8

import { Main } from "./Styles"

const { SET_CURRENT_JOBSHEET } = actions

const setCurrentJobsheetSideEffect = async (dispatch, currentJobsheets, id) => {
  const jobsheet = currentJobsheets.find(
    jobsheet => jobsheet.id === Number(id)
  );

  await dispatch({ type: SET_CURRENT_JOBSHEET, payload: jobsheet })
};

const Board = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { currentJobsheets } = useSelector(state => state.dashboard)

  useEffect(() => {
    setCurrentJobsheetSideEffect(dispatch, currentJobsheets, params.id)
  }, [dispatch, currentJobsheets, params.id])

  return (
    <>
<<<<<<< HEAD
      <Main>
=======
      <main>
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8
        <Header />
        <Components />
      </main>
    </>
  );
};

export default Board;
