import styled, { css } from "styled-components";

import { color, font } from "../../utils/styles";


export const colored = css`
    color: #fff;
    background: ${props => color[props.variant]};
    &:not(:disabled) {
        &:hover {
            backround: blue;
        }
        &:active {
            background: darkblue;
        }
    }
`;

export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-radius: 3px;
    height: 32px;
    transition: all 0.1s;
    ${font.size(1)}
    &:disabled {
        opacity: 0.6;
        cursor: default;
    }
    ${colored}
`;

export const Text = styled.div`
    color: #fff;
    background: ${props => color[props.variant]};
    &:not(:disabled) {
        &:hover {
            backround: blue;
        }
        &:active {
            background: darkblue;
        }
    }
`;

