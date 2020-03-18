import React from "react";
import { Route, Switch } from "react-router-dom";

import { Container, PageTitle, GlobalStyle } from "./Styles";

import Login from "./Login.js";
import Register from "./Register.js";
import ForgotPassword from "./ForgotPassword.js";
import Footer from "./Footer/Footer.js";

const Auth = () => {
  return (
    <>
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
    </>
  );
};

export default Auth;
