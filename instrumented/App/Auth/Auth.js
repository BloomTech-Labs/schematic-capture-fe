import React from "react";
import { Route, Switch } from "react-router-dom"

import Login from "./Login.js"
import ForgotPassword from "./ForgotPassword.js"
import Footer from "./Footer/Footer.js"

import {
  Container,
  PageTitle,
  GlobalStyle,
  AuthContainer
} from "../Styles/Auth/loginStyles"

const Auth = () => {
  return (
    <AuthContainer>
      <GlobalStyle />
      <Container>
        <PageTitle>Schematic Capture</PageTitle>
        <Switch>
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Container>
      <Footer />
    </AuthContainer>
  )
}

export default Auth
