import React, { useState } from "react";
import Modal from "../Modal";
import InviteReg from "./InviteReg";

import { BackDrop, ModalOpenButton } from "../ModalStyles";

const ModalInvite = () => {
  const [isShowing, setIsShowing] = useState(false);

  const openModalHandler = () => {
    setIsShowing(true);
  };
  const closeModalHandler = () => {
    window.location.reload();
    setIsShowing(false);
  };

  const test = <InviteReg />;

  return (
    <div>
      {isShowing ? (
        <BackDrop onClick={closeModalHandler} className="back-drop"></BackDrop>
      ) : null}
      <ModalOpenButton onClick={openModalHandler}>Send Invite</ModalOpenButton>

      <Modal className="modal" show={isShowing} close={closeModalHandler}>
        {test}
      </Modal>
    </div>
  );
};

export default ModalInvite;
