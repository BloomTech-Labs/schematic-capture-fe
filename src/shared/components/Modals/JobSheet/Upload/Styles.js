import styled from "styled-components";
import { color, font, mixin } from "../../../../utils/styles";
import Color from "color";

export const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const UploadForm = styled.div`
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

export const UploadField = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UploadInput = styled.input`
  opacity: 0;
`;

export const InputOverlay = styled.div`
  [type="file"] {
    height: 0;
    overflow: hidden;
    width: 0;
  }

  [type="file"] + label {
    background: ${color.primaryLight};
    border: none;
    border-radius: 5px;
    color: ${color.textLight};
    cursor: pointer;
    display: inline-block;
    font-family: "Poppins", sans-serif;
    font-size: inherit;
    font-weight: 600;
    outline: none;
    padding: 1rem 50px;
    //position: relative;
    transition: all 0.3s;
    vertical-align: middle;

    &:hover {
      background-color: ${color.primaryDark};
    }
  }
`;

export const FileLabel = styled.label``;
