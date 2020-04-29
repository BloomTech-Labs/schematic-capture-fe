import styled from "styled-components";
import { Link } from "react-router-dom";

import { font } from '../../styles'

export const Main = styled.main`
  padding: 1rem 10rem;
`;

export const CompleteBadge = styled.div`
  opacity: 0.5
  width: 10rem;
`;

export const IncompleteBadge = styled.div`
  background: #FA5656;
  border-radius: 40px;
  color: #FFFFFF;
  width: 35%;
  display: flex;
  justify-content: center;
`;

export const ProjectsContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
`

export const PageName = styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin: 0 auto 4rem auto;
  color: #3079BC;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ProjectsHeader = styled.div`

`

export const ProjectLink = styled(Link)`
  // border: 1px solid red;
`;
