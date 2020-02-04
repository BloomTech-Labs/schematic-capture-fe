import React from "react";

import { StyledLink } from "./Style";

import ChevronIcon from "../../assets/chevron-left-icon";

const BackToLink = ({ text, ...rest }) => (
  <StyledLink {...rest}>
    <ChevronIcon />
    <div>Back to {text}</div>
  </StyledLink>
);

export default BackToLink;
