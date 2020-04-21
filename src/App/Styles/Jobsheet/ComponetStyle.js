import styled from 'styled-components';


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

export const List = styled.li`
   color: #3079BC;
   text-decoration: underline;
   font-size: 1.5em;
   list-style-type: none;
   margin-left: 20px;
   margin-top: 50px;
`;

export const Wrapper = styled.div`
margin-left: 1150px;
padding-bottom: 15px;
display: flex;
justify-content:space-evenly;`

export const Table = styled.table`

  margin-left:10px;
  border-left:hidden;
  border-right:hidden;
  color: #21242C;
  
   th{
      height: 65px;
      font-weight: bold;
      color: #21242C;
      
   }
   td{
      height: 65px;
      opacity:0.5;
      border-bottom:0.5 px solid #21242C;
   }
`;

export const Status = styled.h1`
font-size: 1.3rem;
color: #21242C;
padding: 5px;
opacity: 0.5;
`;

export const Img = styled.img`
:hover{
        text-decoration: none;
        opacity: 0.75;};
`