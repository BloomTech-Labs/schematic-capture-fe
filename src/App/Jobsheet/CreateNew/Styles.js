import styled from "styled-components";
import { Link } from "react-router-dom";

import { font, color } from "../../../shared/styles";
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  -webkit-box-shadow: 5px 8px 10px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 8px 10px 2px rgba(0, 0, 0, 0.5);
  height: 50vh;
  width: 75vw;
  min-width: 600px;
  border: 1px black solid;
  background: rgb(213, 216, 220);
  overflow: auto;
`;

export const PreviewTable = styled.table`
  display: table;
  white-space: nowrap;
  margin: auto;
  width: auto;
`;

export const TableItems = styled.tr`
  background: ghostwhite;
  color: black;
`;

export const TableHeader = styled.th`
  background: ghostwhite;
  font-size: 12px;
`;

export const PreLoad = styled.div`
  color: black;
  @media (max-width: 850px) {
    transform: scale(0.5);
  }
`;

export const Top = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TopLeft = styled.div`
  font-size: 16px;
  
`;

// export const input = sty

export const TopRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
`;

export const TopTopRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NewBlank = styled.button`
  border: 1px black solid;
  border-radius: 4px;
  background: white;
  width: 200px;
  height: 40px;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  border: 1px black solid;
  border-radius: 4px;
  background: ${color.primary};
  width: 200px;
  height: 40px;
  font-weight: bold;
`;

export const ImportCsv = styled.label`
  border: 1px black solid;
  border-radius: 4px;
  background: white;
  width: 200px;
  height: 40px;
  display: block;
`;

export const AddSchem = styled.label`
  border: 1px black solid;
  border-radius: 4px;
  background: white;
  width: 200px;
  height: 40px;
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImportText = styled.p`
  color: black;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  height: 100%;
  line-height: 2.4285;
`;

export const OrSpan = styled.span`
  font-size: 18px;
`;

export const LineOr = styled.div`
  overflow: hidden;
  text-align: center;
  font-size: 26px;
  &:before,
  &:after {
    background-color: #eaeaea;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  &:before {
    top: 1.15em;
    right: 1em;
    margin-left: -50%;
  }
  &:after {
    bottom: 2.8em;
    left: 1em;
    margin-right: -50%;
  }
`;