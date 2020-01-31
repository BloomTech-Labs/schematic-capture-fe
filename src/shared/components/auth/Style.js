import styled from "styled-components";

import { color, font } from "../../../shared/utils/styles";

export const Container = styled.div`
    background: ${props => `url(${props.background})`} no-repeat center center
        fixed;
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
    padding: 3rem;
    width: 400px;
    max-width: 500px;
    max-height: 550px;
    position: absolute;
    @media (min-width: 1200px) {
        right: 370px;
    }
    @media (max-width: 500px) {
        width: 80%;
        height: 100%;
        border: none;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`;

export const FieldLabel = styled.label`
    display: block;
    color: ${color.textDark};
    font-family: ${font.bold};
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
    &:focus {
        background-color: #f7f7fa;
    }
`;

export const LineOr = styled.div`
    overflow: hidden;
    text-align: center;
    &:before,
    &:after {
        background-color: #ccc;
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
        bottom: 2.2em;
        left: 1em;
        margin-right: -50%;
    }
`;

export const FieldError = styled.div`
    color: ${color.danger};
`;

export const Button = styled.button`
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.5rem 0.75rem;
    font-size: 1.5rem;
    line-height: 1.5;
    border-radius: 0.5rem;
`;

// A new component based on Button, but with some override styles
export const PrimaryButton = styled(Button)`
    color: ${color.textLight};
    background-color: ${color.primary};
    border-color: ${color.primary};
    width: 40%;

    &:hover {
        background-color: darken(${color.primary}, 25%);
    }
`;

export const SecondaryButton = styled(Button)`
    color: ${color.textDark};
    border-color: ${color.secondary};
    width: 100%;
`;

export const TheButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 8px;
    width: 100%;
`;
