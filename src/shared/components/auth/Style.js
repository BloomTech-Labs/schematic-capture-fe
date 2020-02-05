import styled from "styled-components";

import { Link } from "react-router-dom";

import Color from "color";

import { color, font } from "../../utils/styles";

export const Container = styled.div`
  background: url("../../assets/8609f4b9daabe355452ccd4ea682f37e.jpg") no-repeat
    center center fixed;
  background-color: ${color.gray400};
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 500px) {
    background: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const HeadTitle = styled.h1`
  ${font.size(4.5)}
  ${font.bold}
  color: ${color.textLight};
  @media (max-width: 650px) {
    text-align: center;
  }
  @media (max-width: 500px) {
    color: ${color.textDark};
  }
`;

export const BackToLink = styled(Link)`
  display: flex;
`;

export const FormContainer = styled.div`
  background: ${color.backgroundLight};
  border: 1px solid ${color.borderColor};
  border-radius: 0.5rem;
  padding: 4rem;
  width: 440px;
  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
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

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
`;

export const FormColumn = styled.div`
  width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
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
  border: 1px solid ${color.gray100};
  box-sizing: border-box;
  border-radius: 0.5rem;
  color: ${color.inputColor};
  display: block;
  width: 100%;
  padding: 14px 16px;
  &:hover {
    border-color:
    ${Color(color.secondary)
      .darken(0.1)
      .string()};
    }
  }
  &:focus {
    border-color: ${color.primary};
    &::placeholder {
      color: ${color.gray100};
    }
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
    top: 1.15em;
    right: 1em;
    margin-left: -50%;
  }
  &:after {
    bottom: 2.8em;
    left: 1em;
    margin-right: -50%;
  }
`;

export const FieldError = styled.div`
  margin-top: 8px;
  color: ${color.danger};
  ${font.size(1.25)}
`;

// export const Buttons = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

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

  &:active {
    transform: scale(.98);
    box-shadow: none;
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
  }
`;
