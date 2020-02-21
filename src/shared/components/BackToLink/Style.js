import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, mixin } from "../../utils/styles";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${color.primaryLight};
  &:hover {
    color: ${mixin.darken(color.primaryLight, 0.1)};
  }
  .icon {
    margin-right: 8px;
  }
`;
