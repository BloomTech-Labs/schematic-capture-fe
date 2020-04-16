import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Section, SectionName, StyledLink2, ClientsContain } from "./Styles";

import { CompleteBadge, IncompleteBadge } from '../../shared/components/Styles/ConsolidatedStyles'

import { dispatchers } from "../../shared/actions/dashboardActions";

const { fetchClients } = dispatchers;

const Clients = () => {
  const dispatch = useDispatch();
  const clients = useSelector(state => state.dashboard.clients);
  console.log(clients);

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  return (
    <Section>
      <SectionName>Clients</SectionName>
      <ClientsContain>
        {clients &&
          clients.map(client => (
            <StyledLink2
              data-client-name
              key={client.id}
              to={`/client/${client.id}`}
            >
              {client.companyName}
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

export default Clients;
