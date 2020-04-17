import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { dispatchers } from "../../../shared/actions/dashboardActions"
import { BackToLink } from "../../../shared/components"
import { Link } from "react-router-dom"

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

const { updateProjectName } = dispatchers

const PageHeader = () => {
  const currentClient = useSelector(state => state.dashboard.currentClient)

  const currentProject = useSelector(state => state.dashboard.currentProject)

  const [isEditing, setIsEditing] = useState(false)
  const [projectName, setProjectName] = useState(
    !!currentProject ? currentProject.name : ""
  )
  const dispatch = useDispatch()

  const handleProjectNameChange = event => {
    setProjectName(event.target.value)
  }

  const saveProjectName = event => {
    event.preventDefault()
    dispatch(updateProjectName(projectName, setIsEditing))
  }

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
        {!!currentProject && (
          <>
            {isEditing ? (
              <div style={{ display: "flex" }}>
                <input
                  placeholder="Project Name"
                  type="text"
                  value={projectName}
                  onChange={handleProjectNameChange}
                />
                <Link
                  style={{ marginRight: "1rem" }}
                  onClick={saveProjectName}
                >
                  Save
                </Link>
              </div>
            ) : (
              <h1 onClick={() => setIsEditing(true)}>
                {projectName}
              </h1>
            )}
            <Link
              to={`/project/${currentClient.id}/jobsheet/new`}
              variant="primary"
            >
              New&nbsp;Jobsheet
            </Link>
          </>
        )}
      </div>
    </>
  )
}

export default PageHeader
