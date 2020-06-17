
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Activity from "./Activity"

const ActivityModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Activity</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Activity</ModalHeader>
        <ModalBody>
          <Activity />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Sounds Good!</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ActivityModal;