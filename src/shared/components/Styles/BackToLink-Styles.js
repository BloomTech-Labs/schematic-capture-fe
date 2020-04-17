import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, font } from "../../../App/Styles";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${color.black};
  font-size: ${font.small};
  margin-top: 1rem;
  margin-right: 1rem;
  .icon {
    margin-right: 8px;
  }
  :hover{
    text-decoration: none;
    opacity: 0.4;
    color: ${color.black}
  }
`;
