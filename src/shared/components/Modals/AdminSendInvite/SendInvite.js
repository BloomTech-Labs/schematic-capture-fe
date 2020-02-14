import React, { useState } from "react";
import Modal from "../Modal";
import InviteReg from "./InviteReg";

import {
    BackDrop,
    ModalOpenButton
} from "../ModalStyles";

const SendInvite = () => {
    const [isShowing, setIsShowing] = useState(false);

    const openModalHandler = () => {
        setIsShowing(true);
    };
    const closeModalHandler = () => {
        window.location.reload();
        setIsShowing(false);
    };

    return(
    <div>
        { isShowing ? <BackDrop onClick={closeModalHandler} className="back-drop"></BackDrop> : null}
        <ModalOpenButton onClick={openModalHandler}>Send Invite</ModalOpenButton>

        <Modal
            className="modal"
            show={isShowing}
            close={closeModalHandler}
        >
            <InviteReg/>
        </Modal>
    </div>
    )
};

export default SendInvite;