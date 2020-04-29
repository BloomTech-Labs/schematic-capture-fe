import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import Header from "./ClientHeader"

import { actions } from "../../../shared/actions/dashboardActions"

const { SET_CURRENT_CLIENT } = actions

const setCurrentClient = async (clients, id, dispatch) => {
  const currentClient = clients.find(client => client.id === Number(id))
  await dispatch({ type: SET_CURRENT_CLIENT, payload: currentClient })
}

const Board = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const clients = useSelector(state => state.dashboard.clients)

  useEffect(() => {
    setCurrentClient(clients, params.id, dispatch)
  }, [clients, params.id, dispatch])

  return (
    <>
      <Header />
    </>
  )
}

export default Board
