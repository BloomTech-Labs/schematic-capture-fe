import styled from "styled-components";

import { Fields } from "../../../../shared/components";

import { color, font } from "../../../../shared/styles";

export const Container = styled.div`
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

export const Text = styled.p`
  color: black;
  font-weight: bold;
`;

export const Form = styled.form``;

export const StyledFields = styled(Fields)``;
