import React from "react";

import { StyledLink } from "./Styles";

import ChevronIcon from "../../assets/chevron-left-icon";

const BackToLink = ({ text, ...rest }) => (
  <StyledLink {...rest}>
    <ChevronIcon />
    <div>{text}</div>
  </StyledLink>
);

export default BackToLink;
