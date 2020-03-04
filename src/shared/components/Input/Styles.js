import styled from "styled-components";

import { color, mixin } from "../../styles";

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
  padding: 0.75rem 1rem;
  line-height: 1.5;
  &:hover {
    border-color: ${mixin.darken(color.secondary, 0.1)};
  }
  &:focus {
    border-color: ${color.primary};
    &::placeholder {
      color: ${color.gray100};
    }
  }
`;
