import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, font } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";

export const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export const Main = styled.main`
  padding: 20px 0 0 80px;
`;

export const Section = styled.section`
  padding: 1rem 10rem;
`;

export const SectionName = styled.h2`
  ${font.size(1.5)}
  ${font.bold}
  color: ${color.gray200};
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(33, 36, 44, 0.1);
`;
