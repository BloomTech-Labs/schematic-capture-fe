import React, { useEffect } from "react"
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

const Clients = () => {
  const dispatch = useDispatch()
  const clients = useSelector(state => state.dashboard.clients)
  console.log(clients)

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  return (
    <Section>
      <Clientsh2>Clients</Clientsh2>
      <LineBreak />
      <ClientCont>
        {clients &&
          clients.map(client => (
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
