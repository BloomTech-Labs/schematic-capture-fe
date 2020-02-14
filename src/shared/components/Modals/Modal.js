import React from 'react';

import {
    ModalContainer,
    ModalWrapper,
    ModalBody,
    ButtonCancel,
    CancelText
} from "./ModalStyles";

const Modal = (props) => {
    return (
        <ModalContainer>
            <ModalWrapper
                 style={{
                     transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                     opacity: props.show ? '1' : '0'
                 }}>
                <ModalBody>
                        {props.children}
                </ModalBody>
                <ButtonCancel onClick={props.close}><CancelText>CLOSE</CancelText></ButtonCancel>
            </ModalWrapper>
        </ModalContainer>
    )
};

export default Modal;
