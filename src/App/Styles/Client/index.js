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
    margin: 0 20rem;
  }
  @media (max-width: 1200px) {
    margin: 0 16rem;
  }
`;

export const Section2 = styled.section`
  margin: 0 25rem;
  display: flex;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 1500px) {
    margin: 0 20rem;
  }
  @media (max-width: 1200px) {
    margin: 0 16rem;
  }
`;

export const Projectsh1 = styled.h1`
  color: ${color.blue};
  font-size: ${font.title};
`;

export const Projectsh2 = styled.h2`
  color: ${color.blue};
  font-size: ${font.normal};
  padding-top: 2rem;
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
    color: rgba(33, 36, 44, 0.6);
    text-decoration: none;
  }
`;
export const NewUserBtn = styled(Link)`
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
    color: rgba(33, 36, 44, 0.6);
    text-decoration: none;
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
  color: ${color.blue};
  :hover {
    text-decoration: none;
  }
`;

export const ProjectLinkName = styled(Link)`
  color: ${color.blue};
  :hover {
    text-decoration: none;
    color: ${color.black};
    opacity: 0.5;
  }
`;

export const FlexEnd = styled.button`
  top: 15rem;
  left: 29rem;
  background-color: ${color.red};
  padding: 0.75rem;
  width: 10rem;
  font-size: ${font.small};
  border-radius: 15px;
  color: white;
  opacity: 1;
  font-weight: bold;
  :hover {
    color: rgba(33, 36, 44, 0.5);
  }
  @media (max-width: 1750px) {
    top: 13.5rem;
    left: 25rem;
  }
  @media (max-width: 1700px) {
    top: 13.5rem;
    left: 23.5rem;
  }
  @media (max-width: 1650px) {
    top: 35%;
    left: 67%;
  }
  @media (max-width: 1600px) {
    top: 35%;
    left: 65%;
  }
  @media (max-width: 1300px) {
    top: 35%;
    left: 61%;
  }
`;
export const FlexEnd2 = styled.button`
  top: 15rem;
  left: 29rem;
  background-color: ${color.blue};
  padding: 0.75rem;
  width: 10rem;
  font-size: ${font.small};
  border-radius: 15px;
  color: white;
  opacity: 1;
  font-weight: bold;
  :hover {
    color: rgba(33, 36, 44, 0.5);
  }
  @media (max-width: 1750px) {
    top: 13.5rem;
    left: 25rem;
  }
  @media (max-width: 1700px) {
    top: 13.5rem;
    left: 23.5rem;
  }
  @media (max-width: 1650px) {
    top: 35%;
    left: 67%;
  }
  @media (max-width: 1600px) {
    top: 35%;
    left: 65%;
  }
  @media (max-width: 1300px) {
    top: 35%;
    left: 61%;
  }
`;
