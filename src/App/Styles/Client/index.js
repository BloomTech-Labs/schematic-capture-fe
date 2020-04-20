import styled from 'styled-components'
import { color, font } from '../../Styles/index'

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Section = styled.section`
    margin: 0 25rem;
    // display: flex;
    // justify-content: space-between;
`

export const Section2 = styled.section`
    margin: 0 25rem;
    display: flex;
    justify-content: space-between;
    width: 70%;
`

export const Projectsh1 = styled.h1`
  color: ${color.blue};
  font-size: ${font.title};
`

export const Projectsh2 = styled.h2`
    color: ${color.blue};
    font-size: ${font.normal}
`

export const LineBreak = styled.hr`
    margin-bottom: 5rem
`

export const NewProjBtn = styled.button`
  text-decoration: none;
  background-color: ${color.blue};
  color: white;
  padding: .75rem;
  width: 10rem;
  font-size: ${font.small};
  opacity: 1;
  font-weight: bold;
  :hover{
    color: black;
  }
`

export const ClientHeaderContain = styled.div`
  display: flex;
  justify-content: space-between;
`
