import React from "react";

import { ErrorPage, ErrorPageInner, Title } from "../Styles/PageError-Styles";

const PageError = () => (
  <ErrorPage>
    <ErrorPageInner>
      <Title>Error</Title>
      <p>We're not quite sure what went wrong.</p>
    </ErrorPageInner>
  </ErrorPage>
);

export default PageError;
