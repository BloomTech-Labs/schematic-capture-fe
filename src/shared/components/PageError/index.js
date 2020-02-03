import React from "react";

import { ErrorPage, ErrorPageInner, Title } from "./Styles";

const PageError = () => (
  <ErrorPage>
    <ErrorPageInner>
      <Title>I feel broken.</Title>
      <p>We're not quite sure what went wrong.</p>
    </ErrorPageInner>
  </ErrorPage>
);

export default PageError;
