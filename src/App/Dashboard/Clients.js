import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchers } from "../../shared/actions/dashboardActions";

import {
  Section,
  Clientsh2,
  LineBreak,
  ClientCont,
  ClientBox,
  Spacer,
  FlexEnd,
  FlexEnd2,
  NewClientBtn,
} from "../Styles/Dashboard";

import { ClientHeaderContain } from "../Styles/Client";

const { fetchClients } = dispatchers;

const Clients = (props) => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.dashboard.clients);

  console.log(clients);

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  var clientArray;
  if (props.search.length > 0) {
    clientArray = props.clientsSrc;
  } else {
    clientArray = clients;
  }

  return (
    <Section>
      <ClientHeaderContain>
        <Clientsh2>Clients</Clientsh2>
        <NewClientBtn to={`/client/new`} variant="primary">
          New&nbsp;Client
        </NewClientBtn>
      </ClientHeaderContain>
      <LineBreak />
      {/* @TODO: Please make cleaner sometime */}

      <ClientCont>
        {clientArray.map((client) => (
          <Spacer>
            <ClientBox
              data-client-name
              key={client.id}
              to={`/client/${client.id}`}
            >
              {client.companyName}
            </ClientBox>
            {client.completed !== true ? (
              <FlexEnd>Incomplete</FlexEnd>
            ) : (
              <FlexEnd2>Complete</FlexEnd2>
            )}
          </Spacer>
        ))}
      </ClientCont>
    </Section>
  );
};

export default Clients;
