import React from "react";
import { Route, Switch } from "react-router-dom"

import FirstLoginForm from "./FirstLoginForm.js"
import ForgotPassword from "../ForgotPassword.js"
import Footer from "../Footer/Footer.js"

import {
  Container,
  PageTitle,
  GlobalStyle,
  AuthContainer
} from "../../Styles/Auth/loginStyles"

const FirstLogin = () => {
  return (
    <AuthContainer>
      <GlobalStyle />
      <Container>
        <PageTitle data-cy="schematic-capture-title">Schematic Capture</PageTitle>
          <Route exact path="/firstlogin/:userToken" component={FirstLoginForm} />
      </Container>
      <Footer />
    </AuthContainer>
  )
}

export default FirstLogin
