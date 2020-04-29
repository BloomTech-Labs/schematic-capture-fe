import styled, { css } from "styled-components";

import Color from "color";
import { color, font } from "../../styles";

export const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.75rem 1rem;
  max-height: 40px;
  font-size: 1.5rem;
  line-height: 1.5;
  transition: all 0.1s;
  border-radius: 0.5rem;
  opacity: initial !important;
  width: 20%;
  margin: 0 auto;
  ${font.bold}

  ${props =>
    props.btnBlock &&
    `
    display: block;
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

export const StyledButton = styled.button`
  ${buttonStyle}
`;
