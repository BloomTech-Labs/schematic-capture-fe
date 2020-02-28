import styled from "styled-components";
import { Link } from "react-router-dom";

import { font } from "../../../../shared/styles";
import { buttonStyle } from "../../../../shared/components/Button/Styles";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-right: 2rem;
`;

export const DashboardName = styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
`;

export const StyledLink = styled(Link)`
  ${buttonStyle}
`;
