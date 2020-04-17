import React from "react"
import { useSelector } from "react-redux"

import BackToLink from "../../../shared/components/Components/BackToLink"

import {
  Title,
  Greeting,
  Seperate,
  RightSide,
  Profile,
  Hover
} from '../../Styles/Dashboard'
import { Bread } from '../../Styles/Project'
import { Column } from '../../Styles/Client'

import Search from '../../Styles/Dashboard/Search.png'
import Swirl from '../../Styles/Dashboard/synchronize 1.png'
import Unknown from '../../Styles/Dashboard/unknown.jpg'

const PageHeader = () => {
  const { currentProject, currentJobsheet, currentClient } = useSelector(
    state => state.dashboard
  );
  return (
    <>
      <Seperate>
        <Column>
          <Title>Schematic Capture</Title>
          <Bread>
            <BackToLink
              style={{ marginBottom: "2rem" }}
              to="/dashboard"
              text="Home"
            />
            <BackToLink
              style={{ marginBottom: "2rem" }}
              to={`/client/${currentClient.id}`}
              text='Clients'
            />
            <BackToLink
              style={{ marginBottom: "2rem" }}
              to={`/project/${currentProject.id}`}
              text='Projects'
            />
          </Bread>
        </Column>
        <br />
        <RightSide>
          <Hover src={Swirl} />
          <Hover src={Search} />
          <Greeting to="/profile" variant="primary">
            Hi, Name
            <Profile src={Unknown} />
          </Greeting>
        </RightSide>
      </Seperate>
      <div>
        {!!currentJobsheet && (
          <>
            <h1>{currentJobsheet.name}</h1>
          </>
        )}
      </div>
    </>
  )
}

export default PageHeader
