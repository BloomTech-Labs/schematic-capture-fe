import styled from "styled-components";

import { Link } from "react-router-dom";

import Color from "color";

import { color, font, mixin } from "../../shared/utils/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const PageTitle = styled.h1`
  ${font.size(3)}
  ${font.bold}
  color: ${color.textLight};
  margin: 0 0 4rem;
  @media (min-width: 900px) {
    margin: 0 2rem;
  }
`;

export const BackToLink = styled(Link)`
  display: flex;
`;

export const FormContainer = styled.div`
  background: ${color.backgroundLight};
  border-radius: 0.5rem;
  color: ${color.gray300};
  padding: 4rem;
  width: 95%;
  ${mixin.boxShadowMedium};
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
  @media (min-width: 500px) {
    width: 440px;
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
    border-color: ${mixin.darken(color.secondary, 0.1)};
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
