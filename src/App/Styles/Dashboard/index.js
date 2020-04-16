import styled from 'styled-components'
import { color, font } from '../index'
import { Link } from 'react-router-dom'

export const Title = styled.h1`
    color: ${color.blue};
    font-weight: bold;
    font-size: ${font.normal}
`

export const Seperate = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5rem 25rem 12rem 25rem
`

export const RightSide = styled.div`
    width: 25rem;
    display: flex;
    justify-content: space-between
`

export const Greeting = styled(Link)`
    text-decoration: none;
    color: ${color.black};
    font-size: ${font.normal};
    font-weight: bold;
    :hover{
        text-decoration: none
    }
`

export const Section = styled.section`
    margin: 0 25rem
`

export const Clientsh2 = styled.h2`
    color: ${color.blue};
    font-size: ${font.normal}
`

export const ClientCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
`

export const ClientBox = styled(Link)`
    text-align: center;
    font-size: 36px;
    color: rgba(33,36,44,0.5);
    :hover{
        text-decoration: none;
    }
`

export const Hover = styled.img`
    :hover{
        opacity: 0.5;
    }
`

export const LineBreak = styled.hr`
    margin-bottom: 5rem
`
export const Spacer = styled.div`
    width: 40rem;
    height: 40rem;
    border: 2px solid rgba(33,36,44,0.5);
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

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
`

export const Profile = styled.img`
    max-width: 4rem;
    max-height: 3rem;
    margin: 0 0 0 1rem;
    border-radius: 50px;
`