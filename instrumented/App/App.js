import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import NormalizeStyles from "../shared/styles/normalize"
import BaseStyles from "../shared/styles/baseStyles"
import { PageLoader } from "../shared/components"

import { actions } from '../shared/actions/appActions'

import Router from "./Router"

const App = () => {
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(state => state.app)

  useEffect(() => {
    if (!!error) {
      alert(error);
      dispatch({type : actions.RESET_ERROR})
    }
  }, [error])

  return (
    <>
      {isLoading && <PageLoader />}
      <BrowserRouter>
        <NormalizeStyles />
        <BaseStyles />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
