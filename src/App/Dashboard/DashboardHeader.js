import React, { useState, useEffect } from "react"
import NameDropDownMenu from '../../shared/components/Components/NameDropDownMenu';
import {
  Title,
  Greeting,
  Seperate,
  RightSide,
  Profile,
  Hover,
  SearchIn,
  Buttion
} from "../Styles/Dashboard"
import { useSelector } from "react-redux"
import Search from "../Styles/Dashboard/Search.png"
import Unknown from "../Styles/Dashboard/unknown.jpg"

import swal from "sweetalert";
import Clients from "./Clients"

const DashboardHeader = () => {
  const user = useSelector((state) => state.auth.user)
  const client = useSelector((state) => state.dashboard.clients)
  const [editing, setEditing] = useState(false)
  const [clientout, setClient] = useState([])
  const [search, setSearch] = useState('')

  if (user.firstName == undefined) {
    window.location.reload(false)
  }

  const onLogout = () => {
    localStorage.removeItem("idToken")
    localStorage.removeItem("user")
    localStorage.removeItem("state")
    window.location.reload(false);
    return swal("Logged out successfully!", {
      icon: "success",
      timer: 4000,
    })
  }
  useEffect(() => {
    console.log(search)
    setClient(
      client.filter(input => {
        return input.companyName.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [editing, search])

  return (
    <>
      <Seperate>
        <Title>Schematic Capture</Title>
        <br />
        <RightSide>
          <Buttion onClick={() => setEditing(!editing)}>
            <Hover src={Search} />
          </Buttion>
          {editing ? 
            <SearchIn
              type='search'
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search'
            /> :
            <></>
          }
          <Greeting onClick={onLogout} variant="primary">
            Hi, {user.firstName}
            <Profile src={Unknown} />
            <NameDropDownMenu firstName={user.firstName} lastName={user.lastName} />
          </Greeting>
        </RightSide>
      </Seperate>
      <Clients clientsSrc={clientout} search={search} />
    </>
  )
}

export default DashboardHeader
