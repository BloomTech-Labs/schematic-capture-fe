import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  NewProjBtn,
  NewProjBtn2,
  TechCont,
  MBody,
  MH1,
  ModalCont,
} from "../../Styles/Jobsheets";

var people = [
  "Adam",
  "Tyler",
  "Danni",
  "Vincent",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
];

const TechModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <ModalCont>
      <NewProjBtn onClick={toggle}>{buttonLabel}</NewProjBtn>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <MH1>Available technicians</MH1>
        <MBody>
          {people.map((ele) => (
            <TechCont>
              <input type="checkbox" name={ele} />
              <label for={ele}>{ele}</label>
            </TechCont>
          ))}
        </MBody>
        <NewProjBtn2 onClick={toggle}>Assign Technician</NewProjBtn2>
      </Modal>
    </ModalCont>
  );
};

export default TechModal;
