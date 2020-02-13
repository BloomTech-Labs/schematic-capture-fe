import styled from "styled-components";
import { color, font } from "../../utils/styles";

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
