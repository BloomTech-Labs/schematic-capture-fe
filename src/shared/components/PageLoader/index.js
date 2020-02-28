import React from "react";

import { Spinner } from "../";

import StyledPageLoader from "./Styles";

const PageLoader = () => (
  <StyledPageLoader>
    <Spinner size={80} />
  </StyledPageLoader>
);

export default PageLoader;
