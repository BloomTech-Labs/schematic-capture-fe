import styled from 'styled-components';
import {ModalBody, Modal} from "reactstrap"
import { color, font } from "../../Styles/index";


export const Header = styled.h2`
   color: #3079BC ; 
   top: 10px;
   position: absolute;
   padding: 2px;
`;

export const importButton = styled.button`
   background-color: white;
   height: 12%;
   width: 12%;
`;

export const Buttin = styled.button`
margin-bottom: 4rem;
display:flex;
align-items:flex-start;
justify-content:center;
   :hover{
      div{
         visibility: visible;
      }
   }
`

export const List = styled.h1`
   color: #3079BC;
   text-decoration: underline;
   font-size: 1em;
   list-style-type: none;
   margin-top:50px;
   position: absolute;
   width: 33px;
   height: 25px;
   left: 30px;
   top: 250px;
   @media (max-width: 1024px) {
      margin: 5px 20px 12px 16px;
   }
   @media (max-width: 1200px) {
      margin: 5px 15px 12px 16px};
`;

export const ImgWrapper = styled.div`
   display: flex;
   margin-left: 50px;
   padding-bottom: 10px;
   `;

export const Sorticon = styled.div`
   display: flex; 
   max-height: 2rem;
   border: none;
   outline: none;
   color: white;
   font-size: 16px;
   transition: 0.4s;
   font-weight: bold;
   `;

export const Wrapper = styled.div`
   display: inline; 
`

export const Table = styled.table`
   margin-left:10px;
   border-left:hidden;
   border-right:hidden;
   margin-top: -1.3rem;
   color: #21242C;
   opacity: 0.7 ;

   table:hover{
      color: black;
   }
   th{
      height: 65px;
      font-weight: bold;
      /* color: black; */
      th:hover{
         color: black;
      }
   }
   td{
      height: 65px;
      border-bottom:0.5 px solid #21242C;
   }
`;

export const Status = styled.h1`
   font-size: 1.3rem;
   color: #21242C;
   padding: 5px;
   opacity: 0.5;
   margin-left:25px;
`;

export const CSVButton = styled.button`
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
