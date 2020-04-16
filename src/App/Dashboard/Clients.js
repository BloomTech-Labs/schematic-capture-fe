import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { dispatchers } from "../../shared/actions/dashboardActions"

<<<<<<< HEAD
import { Section, SectionName, StyledLink2, ClientsContain } from "./Styles";

import { CompleteBadge, IncompleteBadge } from '../../shared/components/Styles/ConsolidatedStyles'

import { dispatchers } from "../../shared/actions/dashboardActions";

const { fetchClients } = dispatchers;

const Clients = () => {
  const dispatch = useDispatch();
  const clients = useSelector(state => state.dashboard.clients);
  console.log(clients);
=======
const { fetchClients } = dispatchers

const Clients = () => {
  const dispatch = useDispatch()
  const clients = useSelector(state => state.dashboard.clients)
  console.log(clients)
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  return (
<<<<<<< HEAD
    <Section>
      <SectionName>Clients</SectionName>
      <ClientsContain>
=======
    <section>
      <h2>Clients</h2>
      <div>
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8
        {clients &&
          clients.map(client => (
            <Link
              data-client-name
              key={client.id}
              to={`/client/${client.id}`}
            >
              {client.companyName}
<<<<<<< HEAD
              {/* {client.allComplete ? 
                <CompleteBadge>Complete</CompleteBadge> :
                <IncompleteBadge>Incomplete</IncompleteBadge>
              } */}
              {/* temporary hard-coding completion status */}
              <CompleteBadge>Complete</CompleteBadge>
              <IncompleteBadge>Incomplete</IncompleteBadge>
            </StyledLink2>
          ))}
      </ClientsContain>
    </Section>
  );
};
=======
              <div>Complete</div>
              <div>Incomplete</div>
            </Link>
          ))}
      </div>
    </section>
  )
}
>>>>>>> 546438ae2d94272a35b2d932b97223ad67a658f8

export default Clients
