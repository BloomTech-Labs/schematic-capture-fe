import React from "react"
import { Switch, Route } from "react-router-dom"
import PrivateRoute from "../shared/components/Components/PrivateRoute"
import Auth from "./Auth/Auth.js"
import ClientBoard from "./Client/ClientBoard/ClientHeader.js"
import CreateNewClient from "./Client/NewClientForm/CreateNewClient.js"
import Dashboard from "./Dashboard/DashboardHeader.js"
import JobsheetBoard from "./Jobsheet/JobsheetBoard/JobsheetBoard.js"
import ProjectBoard from "./Project/ProjectBoard/ProjectBoard.js"
import PageError from "../shared/components/Components/PageError"
import NewProject from "./Project/CreateNewProject/CreateNewProject"
import SendInvite from "../shared/components/Components/SendInvite"
import NewJobSheet from "./Jobsheet/CreateNew/CNJobsheet"
import FirstLogin from "./Auth/FirstLogin/FirstLogin.js"
const Router = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/client/new" component={CreateNewClient} />
        <PrivateRoute path="/invite" component={SendInvite} />
        <PrivateRoute path="/client/:id/project/new" component={NewProject} />
        <PrivateRoute
          path="/project/:id/jobsheet/new"
          component={NewJobSheet}
        />
        <PrivateRoute path="/client/:id" component={ClientBoard} />
        <PrivateRoute path="/project/:id" component={ProjectBoard} />
        <PrivateRoute path="/jobsheet/:id" component={JobsheetBoard} />
        <Route path="/firstlogin/:userToken" component={FirstLogin} />
        <Route path="/" component={Auth} />
        <Route path="*" component={PageError} />
      </Switch>
    </>
  )
}

export default Router
