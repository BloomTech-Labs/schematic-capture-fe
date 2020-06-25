import styled from "styled-components";
import { color, font } from "../index";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  color: ${color.blue};
  font-weight: bold;
  font-size: ${font.normal};
`;

export const Seperate = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 25rem 12rem 25rem;
  @media (max-width: 1500px) {
    margin: 5rem 20rem 12rem 20rem;
  }
  @media (max-width: 1200px) {
    margin: 5rem 16rem 12rem 16rem;
  }
`;

export const Seperate2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 25rem 4rem 25rem;
  @media (max-width: 1500px) {
    margin: 5rem 20rem 12rem 20rem;
  }
  @media (max-width: 1200px) {
    margin: 5rem 16rem 12rem 16rem;
  }
`;

export const RightSide = styled.div`
  max-width: 50rem;
  display: flex;
  justify-content: space-between;
  max-height: 2.5rem;
`;
export const NewClientBtn = styled(Link)`
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

export const Footer = styled.footer`
    margin-right: 16rem;
    padding-top: 5%;
    padding-bottom: 5%;
    display: flex;
    justify-content: flex-end;
`

export const HelpButton = styled(Link) `
    color: black;
    font-size: 30px;
    text-decoration: none;
    text-align: center;
    border: ${color.blue} 2px solid;
    border-radius: 1000%;
    width: 40px;
    height: 40px;
    :hover {
        background-color: rgba(33, 36, 44, 0.6);
        text-decoration: none;
`

export const Greeting = styled.button`
  text-decoration: none;
  color: ${color.black};
  font-size: ${font.normal};
  font-weight: bold;
  padding: 0;
  margin-left: 1rem;
  min-width: 100px;
  :hover {
    text-decoration: none;
    div {
      visibility: visible;
      height: auto;
    }
  }
`;

export const Section = styled.section`
  margin: 0 25rem;
  @media (max-width: 1500px) {
    margin: 0 20rem;
  }
  @media (max-width: 1200px) {
    margin: 0 16rem;
  }
`;

export const Clientsh2 = styled.h2`
  color: ${color.blue};
  font-size: ${font.normal};
`;

export const ClientCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1500px) {
    justify-content: space-around;
  }
`;

export const ClientBox = styled(Link)`
  text-align: center;
  font-size: 36px;
  color: rgba(33, 36, 44, 0.5);
  :hover {
    text-decoration: none;
  }
`;

export const Hover = styled.img`
  max-height: 2rem;
  :hover {
    opacity: 0.5;
  }
`;

export const LineBreak = styled.hr`
  margin-bottom: 5rem;
`;

export const Spacer = styled.div`
  width: 40rem;
  height: 40rem;
  border: 1px solid rgba(33, 36, 44, 0.1);
  margin-bottom: 6rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1750px) {
    width: 30%;
    height: 37rem;
  }
  @media (max-width: 1650px) {
    width: 30%;
    height: 35rem;
  }
  @media (max-width: 1500px) {
    width: 40%;
    height: 40rem;
  }
  @media (max-width: 1325px) {
    width: 35.5%;
    height: 30rem;
  }
  @media (max-width: 1200px) {
    width: 35.5%;
    height: 30rem;
  }
`;

export const FlexStart = styled.button`
    position: relative;
    top: -11rem;
    left: 1rem;
    text-decoration: none;
    padding: .75rem;
    width: 10rem;
    font-size: ${font.small};
    border-radius:15px;
    color: white;
    opacity: 1;
    font-weight: bold;
    @media (max-width: 1750px) {
        top: -8rem;
        left: 1rem;
    }
    @media (max-width: 1700px) {
        top: -8rem;
        left: 1rem;
    }
    @media (max-width: 1650px) {
        top: -20%;
        left: 1%;
    }
    @media (max-width: 1600px) {
        top: -20%;
        left: 1%;
    }
    @media (max-width: 1300px) {
        top: -20%;
        left: 1%;
    }
`

export const FlexEnd = styled.button`
    position: relative;
    top: 12rem;
    left: 29rem;
    background-color: ${color.red};
    padding: .75rem;
    width: 10rem;
    font-size: ${font.small};
    border-radius:15px;
    color: white;
    opacity: 1;
    font-weight: bold;
    :hover{
        color: rgba(33,36,44,0.5);
    }
    @media (max-width: 1750px) {
        top: 10.5rem;
        left: 25rem;
    }
    @media (max-width: 1700px) {
        top: 10.5rem;
        left: 23.5rem;
    }
    @media (max-width: 1650px) {
        top: 35%;
        left: 67%;
    }
    @media (max-width: 1600px) {
        top: 28%;
        left: 65%;
    }
    @media (max-width: 1300px) {
        top: 24%;
        left: 61%;
    }
`
export const FlexEnd2 = styled.button`
    position: relative;
    top: 12rem;
    left: 29rem;
    background-color: ${color.blue};
    padding: .75rem;
    width: 10rem;
    font-size: ${font.small};
    border-radius:15px;
    color: white;
    opacity: 1;
    font-weight: bold;
    :hover{
        color: rgba(33,36,44,0.5);
    }
    @media (max-width: 1750px) {
        top: 10.5rem;
        left: 25rem;
    }
    @media (max-width: 1700px) {
        top: 10.5rem;
        left: 23.5rem;
    }
    @media (max-width: 1650px) {
        top: 35%;
        left: 67%;
    }
    @media (max-width: 1600px) {
        top: 28%;
        left: 65%;
    }
    @media (max-width: 1300px) {
        top: 24%;
        left: 61%;
    };
    `

export const Profile = styled.img`
  width: 24px;
  height: 24px;
  margin: -5px 0 0 1rem;
  border-radius: 50%;
  border: 1px solid black;
`;

export const SearchIn = styled.input`
  border-radius: 15px;
  max-width: 10rem;
  text-align: center;
  margin: 0 2rem;
`;

export const Buttion = styled.button`
  margin-right: 2rem;
`;
// Activity modal styles

export const ActivityList = styled.p`
  font-size: 11px;
  line-height: 20px;
  font-weight: bold;
  margin-left: 4px;
  font-family: Open Sans;
`;

export const ActivityTime = styled.p`
  font-size: 11px;
  line-height: 15px;
  text-align: right;
  font-family: Open Sans;
`;

export const InfoBox = styled.div`
    border: black;
    color: red;
    font-size: 50%;
    padding: 5%;
`;

export const ActivityCard = styled.div`
  border: solid black 1px;
  border-radius: 3px;
  margin-bottom: 5px
`;
