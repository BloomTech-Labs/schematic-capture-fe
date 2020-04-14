import styled from "styled-components";
import { Link } from "react-router-dom";

import { color, font } from "../../shared/styles";
import { buttonStyle } from "../../shared/components/Styles/Button-Styles";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

export const DashboardName = styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
  color: #3079BC;
`;

export const ClientsContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
`

export const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export const Main = styled.main`
  padding: 1rem 10rem;
`;

export const Section = styled.section`
  margin-top: 3rem;
`;

export const SectionName = styled.h2`
  ${font.size(1.5)}
  ${font.bold}
  color: ${color.gray200};
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(33, 36, 44, 0.1);
`;

export const StyledLink2 = styled(Link)`
  width: 30%;
  height: 16rem;
  font-size: 2rem;
  border: 1px solid rgba(33, 36, 44, 0.1);
  border-radius: 5px;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
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
