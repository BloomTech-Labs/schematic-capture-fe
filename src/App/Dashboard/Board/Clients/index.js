import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Section, SectionName, StyledLink } from "./Styles";

import { dispatchers } from "../../../../shared/actions/dashboardActions";

const { fetchClients } = dispatchers;

const Clients = () => {
  const dispatch = useDispatch();
  const clients = useSelector(state => state.dashboard.clients);

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return (
    <Section>
      <SectionName>All Clients</SectionName>
      <div>
        {clients &&
          clients.map(client => (
            <StyledLink key={client.id} to={`/client/${client.id}`}>
              {client.companyName}
            </StyledLink>
          ))}
      </div>
    </Section>
  );
};

export default Clients;
