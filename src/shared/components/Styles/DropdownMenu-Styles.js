import { Link } from "react-router-dom";
import styled from "styled-components";

import { color, font, mixin } from "../../utils/styles";

export const Dropdown = styled.div`
  top: 100%;
  left: 0;
  z-index: 1000;
  display: block;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: ${font.textDark};
  text-align: left;
  list-style: none;
  background-color: ${color.backgroundLight};
  background-clip: padding-box;
  border: 1px solid ${color.borderColor};
  border-radius: 0.25rem;
  ${mixin.boxShadowMedium}
`;

export const DropdownItem = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  color: ${color.textDark};
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
`;
