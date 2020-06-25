import styled from "styled-components";
import { Link } from "react-router-dom";
import { ModalBody, Modal } from "reactstrap";
import { color, font } from "../../Styles/index";

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

export const Projectsh2 = styled.h2`
  color: ${color.blue};
  font-size: ${font.normal};
  padding-top: 2rem;
`;

export const LineBreak = styled.hr`
  margin-bottom: 5rem;
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

export const NewProjBtn = styled(Link)`
  display: flex;
  margin: 1.5rem;
  border-radius: 0.7rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid ${color.blue};
  color: ${color.blue};
  padding: 0.2rem 0.5rem;
  width: 15rem;
  height: 4.5rem;
  opacity: 1;
  font-weight: bold;
  :hover {
    text-decoration: none;
    color: white;
    background-color: ${color.blue};
  }
`;
export const NewProjBtn2 = styled(Link)`
  display: flex;
  margin: 2rem auto;
  border-radius: 0.7rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid ${color.blue};
  color: ${color.blue};
  padding: 0.2rem 0.5rem;
  width: 15rem;
  height: 4.5rem;
  opacity: 1;
  font-weight: bold;
  :hover {
    text-decoration: none;
    color: white;
    background-color: ${color.blue};
  }
`;
export const NewProjBtn3 = styled.button`
display: flex;
  margin: 2rem auto;
  border-radius: 0.7rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid ${color.blue};
  color: ${color.blue};
  padding: 0.2rem 0.5rem;
  width: 15rem;
  height: 4.5rem;
  opacity: 1;
  font-weight: bold;
  :hover {
    text-decoration: none;
    color: white;
    background-color: ${color.blue};
`;

export const DetailsBtn = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: ${color.blue};
  padding: 0.2rem 0.5rem;
  width: 95%;
  height: 4.5rem;
  opacity: 1;
  font-weight: bold;
  :hover {
    text-decoration: none;
    color: white;
    background-color: ${color.blue};
  }
`;

export const DetailsBtn2 = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: ${color.red};
  padding: 0.2rem 0.5rem;
  width: 95%;
  height: 4.5rem;
  opacity: 1;
  font-weight: bold;
  :hover {
    text-decoration: none;
    color: white;
    background-color: ${color.blue};
  }
`;

export const CreateNewClientBtn = styled(Link)`
  display: flex;
  margin: 1.5rem;
  border-radius: 0.7rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid ${color.blue};
  color: white;
  background-color: ${color.blue};
  padding: 0.2rem 0.5rem;
  width: 25rem;
  height: 4.5rem;
  opacity: 1;
  font-weight: bold;
  :hover {
    text-decoration: none;
    color: white;
    background-color: ${color.blue};
  }
`

export const BtnCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const TechCont = styled.div`
  width: 13rem;
  margin: 1.5rem auto;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  label {
    color: ${color.blue};
    width: 10rem;
    margin: 0.2rem;
  }
  input {
    margin: 0 0.3rem;
    color: ${color.blue};
  }
`;

export const Container = styled.div`
  color: ${color.blue};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin: 0 auto;

  input {
    margin: 2rem;
  }
`;

export const BorderedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2%;
  padding: 4%;
  border: gray 1px solid;
  border-radius: 1rem;
`;

export const BorderedDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3%;
  width: 500px;
  padding: 4%;
  border: gray 1px solid;
  border-radius: 1rem;
`

export const MBody = styled(ModalBody)`
  height: 50rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const NewProjectModalCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

export const MButton = styled.button`
  width: 100%;
  background-color: ${color.blue};
  padding: 1rem;
  color: white;
  font-size: 2rem;
`;

export const MDiv = styled.div`
  width: 80%;
`;

export const SpaceBetween = styled.div`
  display: flex;
  height: 75%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalCont = styled.div`
  border-radius: 10rem;
`;

export const Mod = styled(Modal)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

export const MH1 = styled.h1`
  font-family: Open Sans;
  color: black;
  text-align: center;
  margin-top: 2rem;
`;
