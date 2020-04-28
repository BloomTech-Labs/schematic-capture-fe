import React, { useState } from "react";
import { Modal } from "reactstrap";
import {
  NewProjBtn,
  NewProjBtn2,
  TechCont,
  MBody,
  MH1,
  ModalCont,
  Mod
} from "../../Styles/Jobsheets";

var people = [
  "Adam",
  "Tyler",
  "Danni",
  "Vincent",
  "Test1",
  "Test2",
  "Test3",
  "Test4",
  "Test5",
  "Test6",
  "Test7",
  "Test8",
  "Test9",
  "Test10",
  "Test11",
  "Test12",
  "Test13",
  "Test14",
  "Test15",
  "Test16",
  "Test17",
  "Test18",
  "Test19",
  "Test20",
  "Test21",
  "Test22",
  "Test23",
  "Test24",
];

const TechModal = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <ModalCont>
      <NewProjBtn onClick={toggle}>{buttonLabel}</NewProjBtn>
      <Mod isOpen={modal} toggle={toggle}>
        <MH1>Available technicians</MH1>
        <MBody>
          {people.map((ele) => (
            <TechCont>
              <input type="checkbox" name={ele} value={ele} />
              <label for={ele}>{ele}</label>
            </TechCont>
          ))}
        </MBody>
        <NewProjBtn2 onClick={toggle}>Assign Technician</NewProjBtn2>
      </Mod>
    </ModalCont>
  );
};

export default TechModal;
