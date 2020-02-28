import styled from "styled-components";
import { Link } from "react-router-dom";

import { font } from "../../../../shared/styles";
import { buttonStyle } from "../../../../shared/components/Button/Styles";
import { Input } from "../../../../shared/components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-right: 2rem;
`;

export const PageName = styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export const StyledInput = styled(Input)``;
