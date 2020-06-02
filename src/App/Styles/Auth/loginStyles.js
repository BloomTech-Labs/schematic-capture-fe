import styled, { createGlobalStyle } from "styled-components";

import { Link } from "react-router-dom";

import Color from "color";

import { color, font, mixin } from "../../../shared/styles";

export const GlobalStyle = createGlobalStyle`
  body {
  background: url("../../../assets/bg-resized.jpg") no-repeat fixed;
    background-size: cover;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20vh auto 20vh auto;
  width: 100%;
  height: 100%;
  // @media (min-width: 900px) {
  //   flex-direction: row;
  //   align-items: center;
  //   justify-content: space-evenly;
  // }
`;

export const PageTitle = styled.h1`
  ${font.size(3)}
  ${font.bold}
  color: white;
  padding:2rem;
  background-color: rgba(48,121,188,0.8);
  border-radius: 15px;
  margin: 0 0 4rem 0;
  // @media (min-width: 900px) {
  //   margin: 0 2rem;
  // }
`;

export const BackToLink = styled(Link)`
  display: flex;
`;

export const Button1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.75rem 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
  transition: all 0.1s;
  border-radius: 0.5rem;
  opacity: initial !important;
  text-align: center;
  ${font.bold}

  ${(props) =>
    props.btnBlock &&
    `
    display: block;
    width: 100%;
  `}

  background-color: ${({ variant }) =>
    !variant || variant === "primary" ? color.primary : "transparent"};

  color: black;

  border-color: ${({ variant }) =>
    !variant || variant === "primary" ? color.primary : color.secondary};

    .icon {
        margin-right: 12px;
        vertical-align: sub;
    }

  &:active {
    transform: scale(.98);
    box-shadow: none;
  }

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" && Color(color.primary).darken(0.25).string()};
    border-color: ${({ variant }) =>
      variant === "secondary" && Color(color.secondary).darken(0.25).string()};
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.75rem 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
  transition: all 0.1s;
  border-radius: 0.5rem;
  opacity: initial !important;
  ${font.bold}

  ${(props) =>
    props.btnBlock &&
    `
    display: block;
    width: 100%;
  `}

  background-color: ${({ variant }) =>
    !variant || variant === "primary" ? color.primary : "transparent"};

  color: white;

  border-color: ${({ variant }) =>
    !variant || variant === "primary" ? color.primary : color.secondary};

    .icon {
        margin-right: 12px;
        vertical-align: sub;
    }

  &:active {
    transform: scale(.98);
    box-shadow: none;
  }

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" && Color(color.primary).darken(0.25).string()};
    border-color: ${({ variant }) =>
      variant === "secondary" && Color(color.secondary).darken(0.25).string()};
  }
`

export const Signin = styled.h2`
  margin-bottom: 1rem;
`