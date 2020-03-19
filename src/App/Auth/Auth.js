import React from "react";
import { Route, Switch } from "react-router-dom";

import { Container, PageTitle, GlobalStyle, AuthContainer } from "./Styles";

import Login from "./Login.js";
import Register from "./Register.js";
import ForgotPassword from "./ForgotPassword.js";
import Footer from "./Footer/Footer.js";

const Auth = () => {
  return (
    <AuthContainer>
      <GlobalStyle />
      <Container>
        <PageTitle>Schematic Capture</PageTitle>
        <Switch>
          <Route path="/register/:inviteToken?" component={Register} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Container>
      <Footer />
    </AuthContainer>
  );
};

export default Auth;
