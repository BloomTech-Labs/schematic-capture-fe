import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, font } from "../../../shared/styles";
import { buttonStyle } from "../../../shared/components/Styles/Button-Styles";

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
`;

export const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export const Main = styled.main`
  padding: 20px 0 0 80px;
`;

export const Section = styled.section`
  margin-top: 3rem;
`;

export const SectionName = styled.h2`
  ${font.size(1.5)}
  ${font.bold}
  color: ${color.gray200};
  margin-bottom: 1rem;
`;

export const StyledLink2 = styled(Link)`
  display: block;
  padding: 16px 12px;
  border-bottom: 1px solid ${color.borderColor};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;