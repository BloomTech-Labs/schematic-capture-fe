import React from "react"
import { Route, Switch } from "react-router-dom"

import { GlobalStyle } from "./Styles"

import Login from "./Login.js"
import Register from "./Register.js"
import ForgotPassword from "./ForgotPassword.js"
import Footer from "./Footer/Footer.js"

const Auth = () => {
  return (
    <div>
      <GlobalStyle />
      <div>
        <h1>Schematic Capture</h1>
        <Switch>
          <Route path="/register/:inviteToken?" component={Register} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default Auth
