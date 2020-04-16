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
    margin: 2.5rem 15rem 12rem 15rem
`

export const Greeting = styled(Link)`
    text-decoration: none;
    color: ${color.black};
    font-size: ${font.small}
`