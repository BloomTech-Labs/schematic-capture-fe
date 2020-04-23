import React from "react";

import Spinner from "./Spinner";

import StyledPageLoader from "../Styles/PageLoader-Styles";

const PageLoader = () => (
  <StyledPageLoader>
    <Spinner size={80} />
  </StyledPageLoader>
);

export default PageLoader;
