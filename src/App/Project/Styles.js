import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, font } from "../../shared/utils/styles";

export const Section = styled.section`
  margin-top: 3rem;
`;

export const SectionName = styled.h2`
  ${font.size(1.5)}
  ${font.bold}
  color: ${color.gray200};
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 16px 12px;
  border-bottom: 1px solid ${color.borderColor};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
