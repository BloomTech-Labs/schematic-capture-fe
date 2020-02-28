import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { Container, PageTitle, GlobalStyle } from "./Styles";

import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Footer from "./Footer";

const Auth = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Auth;
