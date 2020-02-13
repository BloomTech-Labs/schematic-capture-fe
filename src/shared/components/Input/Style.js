import styled from "styled-components";

import Color from "color";

import { color } from "../../utils/styles";

export const StyledInput = styled.div``;

export const StyledIcon = styled.i``;

export const InputField = styled.input`
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
