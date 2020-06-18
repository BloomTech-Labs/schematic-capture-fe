
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Activity from "./Activity"
import { useDispatch, useSelector } from "react-redux";

const ActivityModal = (props) => {
  const {
    className
  } = props;

  const activities = useSelector((state) => state.dashboard.activities);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteRead = () => {
 // delete endpoint needed for activities 
  }
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
          <Button color="secondary" onClick={deleteRead}>Mark All Read</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ActivityModal;