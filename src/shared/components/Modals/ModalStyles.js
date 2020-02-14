import styled from "styled-components";
import { color, font } from "../../utils/styles";
import Color from "color";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 0;
`;

export const ModalWrapper = styled.div`
  background: white;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  transition: all 0.8s;
  width: 60%;
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export const ModalBody = styled.div`
  padding: 10px 15px;
  text-align: center;
`;

export const ButtonCancel = styled.button`
  background-color: ${color.danger};
  border-radius: 1rem;
  float: left;
  border: none;
  font: ${color.textLight};
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 10px;
`;

export const CancelText = styled.p`
  color: ${color.textLight};
`;

export const BackDrop = styled.div`
  background-color: rgba(48, 49, 48, 0.24);
  height: 100%;
  backdrop-filter: blur(4px);
  position: absolute;
  bottom: 0px;
  transition: all 1.3s;
  width: 100%;
`;

export const ModalOpenButton = styled.button`
  border: 1px black solid;
  border-radius: 1rem;
  padding: 5px;
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