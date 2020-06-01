import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dispatchers } from "../../shared/actions/dashboardActions"

import {
  Section,
  Clientsh2,
  LineBreak,
  ClientCont,
  ClientBox,
  Spacer,
  FlexEnd
} from '../Styles/Dashboard'

const { fetchClients } = dispatchers

const Clients = props => {
  const dispatch = useDispatch()
  const clients = useSelector(state => state.dashboard.clients)
  const { currentProjects } = useSelector(state => state.dashboard)

  const [complete, setComplete] = useState()
  console.log(clients)

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  const getCompleted = completed => {
    setComplete(completed);
  };
  var clientArray;
  if (props.search.length > 0){
    clientArray = props.clientsSrc
  } else {
    clientArray = clients
  }

  return (
    <Section>
      <Clientsh2>Clients</Clientsh2>
      <LineBreak />
      {/* Please make cleaner sometime */}
      
        <ClientCont>
        {clientArray.map(client => (
            <Spacer>
              <ClientBox
                data-client-name
                key={client.id}
                to={`/client/${client.id}`}
              >
                {client.companyName}
              </ClientBox>
              <FlexEnd>Incomplete</FlexEnd>
            </Spacer>
          ))}
        </ClientCont> 
      
    </Section>
  )
}

export default Clients
