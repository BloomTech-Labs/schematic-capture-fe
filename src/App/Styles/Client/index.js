import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, font } from "../../Styles/index";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  margin: 0 25rem;
  // display: flex;
  // justify-content: space-between;
  @media (max-width: 1500px) {
    margin: 0 21rem;
  }
  @media (max-width: 1200px) {
    margin: 0 17rem;
  }
`;

export const Section2 = styled.section`
  margin: 0 25rem;
  display: flex;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 1500px) {
    margin: 0 21rem;
  }
  @media (max-width: 1200px) {
    margin: 0 17rem;
  }
`;

export const Projectsh1 = styled.h1`
  color: ${color.blue};
  font-size: ${font.title};
`;

export const Projectsh2 = styled.h2`
    color: ${color.blue};
    font-size: ${font.normal};
    padding-top 2rem;
`;

export const LineBreak = styled.hr`
  margin-bottom: 5rem;
`;

export const NewProjBtn = styled(Link)`
  text-decoration: none;
  background-color: ${color.blue};
  border-radius: 25px;
  text-align: center;
  color: white;
  padding: 0.75rem;
  width: 10rem;
  font-size: ${font.small};
  opacity: 1;
  font-weight: bold;
  :hover {
    text-decoration: none;
    color: ${color.blue};
    background-color: white;
  }
`;

export const ClientHeaderContain = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectsTable = styled.table`
  border: none;
`;

export const StyledTableHead = styled.th`
  font-weight: bold;
  font-style: normal;
  opacity: 1;
  padding: 1rem 0;
  font-size: 2rem;
`;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid rgba(33, 36, 44, 0.1);
  border-top: none;
  border-left: none;
  border-right: none;
`;

export const StyledTableData = styled.td`
  padding: 2rem 0;
`;

export const ProjectLink = styled(Link)`
  color: #3079bc;
  :hover {
    text-decoration: none;
  }
`;
