import styled from "styled-components";
import { Link } from "react-router-dom";

import { color } from "../../../App/Styles";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${color.black};
  .icon {
    margin-right: 8px;
  }
`;
