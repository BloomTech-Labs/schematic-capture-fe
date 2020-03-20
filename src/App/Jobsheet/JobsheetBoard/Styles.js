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

export const Section = styled.section`
  margin-top: 3rem;
`;

export const SectionName = styled.h2`
  ${font.size(1.5)}
  ${font.bold}
  color: ${color.gray200};
  margin-bottom: 1rem;
`;

export const ImgSel = styled.p`
  padding: .5rem;
  border: 2px lightgrey solid;
  border-radius: 15px;
  color: grey;
`

export const PTag = styled.h3`
  color: black;
`

export const PageName = styled.h1`
  ${font.size(3)}
  ${font.bold}
  margin-right: 1rem;
`;

export const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export const StyledInput = styled.input`
  text-content: center;
  padding: 1%;
  border-radius: 15px;
  color: grey;
  
`

export const StyledSubmit = styled.button`
  background-color: green;
  padding: 1.5%;
  border-radius: 15px;
`

export const Main = styled.main`
  padding: 20px 0 0 80px;
`;
