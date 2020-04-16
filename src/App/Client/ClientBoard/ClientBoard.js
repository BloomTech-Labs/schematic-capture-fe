import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import Header from "./ClientHeader"
import Projects from "./Projects"

<<<<<<< HEAD
import Header from "./ClientHeader";
import Projects from "./Projects";

import { actions } from "../../../shared/actions/dashboardActions";

const { SET_CURRENT_CLIENT } = actions;
=======
import { actions } from "../../../shared/actions/dashboardActions"

const { SET_CURRENT_CLIENT } = actions
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8

const setCurrentClient = async (clients, id, dispatch) => {
  const currentClient = clients.find(client => client.id === Number(id))

  await dispatch({ type: SET_CURRENT_CLIENT, payload: currentClient })
};

const Board = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const clients = useSelector(state => state.dashboard.clients)

  useEffect(() => {
    setCurrentClient(clients, params.id, dispatch)
  }, [clients, params.id, dispatch])

  return (
    <>
<<<<<<< HEAD
      <Header />
      <Projects />
=======
      <main>
        <Header />
        <Projects />
      </main>
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8
    </>
  )
}

export default Board
