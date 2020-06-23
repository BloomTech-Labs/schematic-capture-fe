import styled from 'styled-components';
import { Link } from "react-router-dom";
import { color, font } from "../../Styles/index";
import SchematicChooser from "../../Jobsheet/CreateNew/DropboxSchematicChooser";

export const NewSection2 = styled.section`
  margin: 0 10rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 1500px) {
    margin: 0 20rem;
  }
  @media (max-width: 1200px) {
    margin: 0 16rem;
  }
`;

export const SchematicWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NewBtnCont = styled.div`
  height: 33vh;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
 
`;

export const ImportAdd = styled.div`
  width: 100%;
  display: flex;

`;



export const NewProjBtn1 = styled.p`
  display: flex;
  margin: 1.5rem;
  margin-left: 0;
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

export const NewProjBtn2 = styled.button`
  display: flex;
  flex-direction: row;
  margin: 1.5rem;
  margin-left: 0;
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
  margin: 1.5rem;
  margin-left: 0;
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

export const JobsheetInput = styled.div`
  
`;

export const SchematicTable = styled.table`
  margin-top: -20vh;
  margin-left: hidden;
  margin-right: hidden;
`;