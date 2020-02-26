import styled from "styled-components";
import { Link } from "react-router-dom";

import { color } from "../../utils/styles";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${color.primaryLight};
  .icon {
    margin-right: 8px;
  }
`;
