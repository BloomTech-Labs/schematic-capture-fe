import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchers } from "../../shared/actions/dashboardActions";
import Help from "../../shared/components/Components/Help"

import {
  Section,
  Clientsh2,
  LineBreak,
  ClientCont,
  ClientBox,
  Spacer,
  FlexEnd,
  FlexEnd2,
  FlexStart,
  NewClientBtn,
  InfoBox
} from "../Styles/Dashboard";

import { ClientHeaderContain } from "../Styles/Client";
import ClientInfo from "./ClientInfo";

const { fetchClients } = dispatchers;

const Clients = (props) => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.dashboard.clients);
  const user = useSelector((state) => state.auth.user);

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
    <>
      <Section>
        <ClientHeaderContain>
          <Clientsh2 data-cy="clients-header">Clients</Clientsh2>

          {/* Conditionally render for only Admins... */}
          {user.roleId !== 3 && 
          <NewClientBtn to={`/client/new`} variant="primary">
            New&nbsp;Client
          </NewClientBtn>
          }

        </ClientHeaderContain>
        <LineBreak />

        <ClientCont>
          {clientArray.map((client) => (
            <Spacer style={{border: "1px solid #3078bcce"}}>
              <FlexStart>
              <ClientInfo info={client} />
              </FlexStart>
              <ClientBox
                data-cy={`client-name-${client.id}`}
                data-client-name
                key={client.id}
                to={`/client/${client.id}`}
              >
                {client.companyName}
              </ClientBox>
              {client.completed !== true ? (
                <FlexEnd data-cy={`client-complete-${client.id}`}>
                  Incomplete
                </FlexEnd>
              ) : (
                <FlexEnd2 data-cy={`client-complete-${client.id}`}>
                  Complete
                </FlexEnd2>
              )}
            </Spacer>
          ))}
        </ClientCont>
      </Section>
      <Help linkTo="ClientsListHelp" thisPage={Clients}/>
    </>
  );
};

export default Clients;
