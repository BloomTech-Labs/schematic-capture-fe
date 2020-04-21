import styled from 'styled-components'
import { color, font } from '../index'
import { Link } from 'react-router-dom'

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
        margin: 5rem 20rem 12rem 20rem
    }
    @media (max-width: 1200px) {
        margin: 5rem 16rem 12rem 16rem
    }
`

export const Seperate2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5rem 25rem 4rem 25rem;
    @media (max-width: 1500px) {
        margin: 5rem 20rem 12rem 20rem
    }
    @media (max-width: 1200px) {
        margin: 5rem 16rem 12rem 16rem
    }
`

export const RightSide = styled.div`
    width: 25rem;
    display: flex;
    justify-content: space-between;
    max-height: 2.5rem;
`

export const Greeting = styled.button`
    text-decoration: none;
    color: ${color.black};
    font-size: ${font.normal};
    font-weight: bold;
    padding: 0;
    :hover{
        text-decoration: none
    }
`

export const Section = styled.section`
    margin: 0 25rem;
    @media (max-width: 1500px) {
        margin: 0 20rem 
    }
    @media (max-width: 1200px) {
        margin: 0 16rem 
    }
`

export const Clientsh2 = styled.h2`
    color: ${color.blue};
    font-size: ${font.normal};
`

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
    color: rgba(33,36,44,0.5);
    :hover{
        text-decoration: none;
    }
`

export const Hover = styled.img`
    max-height: 2rem;
    :hover{
        opacity: 0.5;
    }
`

export const LineBreak = styled.hr`
  margin-bottom: 5rem;
`;

export const Spacer = styled.div`
    width: 40rem;
    height: 40rem;
    border: 2px solid rgba(33,36,44,0.1);
    margin-bottom: 6rem;
    border-radius:10px;
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
        width: 37.5%;
        height: 35rem;
    }
    @media (max-width: 1200px) {
        width: 37.5%;
        height: 30rem;
    }
`

export const FlexEnd = styled.button`
    position: relative;
    top: 15rem;
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
`

export const Profile = styled.img`
    max-width: 4rem;
    max-height: 3rem;
    margin: 0 0 0 1rem;
    border-radius: 50px;
`