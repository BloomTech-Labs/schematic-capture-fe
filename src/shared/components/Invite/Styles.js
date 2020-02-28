import styled from "styled-components";
import { color, mixin } from "../../styles";

export const InviteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

export const InviteForm = styled.div`
  background: ${color.backgroundLight};
  border: 1px solid ${color.borderColor};
  border-radius: 0.5rem;
  -webkit-box-shadow: 5px 8px 10px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 8px 10px 2px rgba(0, 0, 0, 0.2);
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
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100vh;
    border: none;
    h1 {
      margin-top: 3rem;
    }
  }
`;

export const StyledSelect = styled.select`
  background: ${color.inputBackground};
  cursor: pointer;
  margin: 1rem;
  border: 1px solid ${color.gray100};
  box-sizing: border-box;
  border-radius: 0.5rem;
  color: ${color.inputColor};
  display: block;
  width: 66%;
  padding: 9.7px 11.7px;
  &:hover {
    border-color: ${mixin.darken(color.secondary, 0.1)};
  }
  &:focus {
    border-color: ${color.primary};
  }
`;

export const InviteGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InviteGroupBack = styled.div``;

export const InviteTitle = styled.h1`
  text-align: center;
  color: black;
`;

export const AccessText = styled.h4`
  color: black;
`;
