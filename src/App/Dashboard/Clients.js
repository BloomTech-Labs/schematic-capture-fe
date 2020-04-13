import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Section, SectionName, StyledLink2 } from "./Styles";

import { dispatchers } from "../../shared/actions/dashboardActions";

const { fetchClients } = dispatchers;

const Clients = () => {
  const dispatch = useDispatch();
  const clients = useSelector(state => state.dashboard.clients);

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  return (
    <Section>
      <SectionName>Clients</SectionName>
      <div>
        {clients &&
          clients.map(client => (
            <StyledLink2
              data-client-name
              key={client.id}
              to={`/client/${client.id}`}
            >
              {client.companyName}
            </StyledLink2>
          ))}
      </div>
    </Section>
  );
};

export default Clients;
