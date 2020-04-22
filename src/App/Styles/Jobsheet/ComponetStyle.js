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
   margin-left: 1200px;
   padding-bottom: 10px`



export const Wrapper = styled.div`
display: inline; 
@media (max-width: 1024px) {
        margin: 5px 20px 12px 16px;
    }
    @media (max-width: 1200px) {
        margin: 5px 15px 12px 16px
    }`


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

