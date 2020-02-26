import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { Container, PageTitle } from "./Styles";

import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./Footer";

const Auth = () => {
  return (
    <Fragment>
      <Container>
        <PageTitle>Schematic Capture</PageTitle>
        <Switch>
          <Route path="/login" component={Login} />
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
