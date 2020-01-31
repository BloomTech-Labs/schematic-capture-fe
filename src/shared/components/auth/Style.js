import styled from "styled-components";
import Color from "color";

import { color, font } from "../../../shared/utils/styles";

export const Container = styled.div`
  background: url("../../assets/8609f4b9daabe355452ccd4ea682f37e.jpg") no-repeat
    center center fixed;
  background-color: #000000;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    background: none;
  }
`;

export const FormContainer = styled.div`
  background: ${color.backgroundLight};
  border: 1px solid ${color.borderColor};
  border-radius: 0.5rem;
  padding: 4rem;
  width: 400px;
  max-width: 500px;
  position: absolute;
  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    margin-bottom: 3rem;
  }
  a {
    color: ${color.primary};
  }
  @media (min-width: 1200px) {
    right: 100px;
  }
  @media (max-width: 500px) {
    width: 80%;
    height: 100%;
    border: none;
    h1 {
      margin-top: 3rem;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FieldLabel = styled.label`
  display: block;
  color: ${Color(color.textDark)
    .lighten(1)
    .string()};
  font-family: ${font.regular};
  ${font.size(1.25)}
`;

export const StyledField = styled.input`
  background: ${color.inputBackground};
  border: 0.25px solid #ccc;
  box-sizing: border-box;
  border-radius: 0.5rem;
  color: ${color.inputColor};
  display: block;
  width: 100%;
  padding: 10px 10px;
  margin-top: 8px;
  &:hover {
    border-color:
    ${Color(color.secondary)
      .darken(0.1)
      .string()};}
  }
  &:focus {
    border-color: ${color.primary};
  }
`;

export const LineOr = styled.div`
  overflow: hidden;
  text-align: center;
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
    top: 2.15em;
    right: 1em;
    margin-left: -50%;
  }
  &:after {
    bottom: 3.25em;
    left: 1em;
    margin-right: -50%;
  }
`;

export const FieldError = styled.div`
  margin-top: 8px;
  color: ${color.danger};
  ${font.size(1.25)}
`;

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
  ${font.bold}

  ${props =>
    props.btnBlock &&
    `
    display: block;
    width: 100%;
  `}

  background-color: ${({ variant }) =>
    !variant || variant === "primary" ? color.primary : "transparent"};

  color: ${({ variant }) =>
    !variant || variant === "primary" ? color.textLight : color.textDark};

  border-color: ${({ variant }) =>
    !variant || variant === "primary" ? color.primary : color.secondary};

    .icon {
        margin-right: 12px;
        vertical-align: sub;
    }

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" &&
      Color(color.primary)
        .darken(0.25)
        .string()};
    border-color: ${({ variant }) =>
      variant === "secondary" &&
      Color(color.secondary)
        .darken(0.25)
        .string()};

`;
