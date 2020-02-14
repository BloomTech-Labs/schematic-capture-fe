import React, { useState } from "react";
import Modal from "../../Modal";

import {
    BackDrop,
    ModalOpenButton
} from "../../ModalStyles";



import UploadModal from "./UploadModal";

const UploadPDF = () => {
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
            <ModalOpenButton onClick={openModalHandler}>Upload Schematic</ModalOpenButton>

            <Modal
                className="modal"
                show={isShowing}
                close={closeModalHandler}
            >
                <UploadModal/>
            </Modal>
        </div>
    )
};

export default UploadPDF;