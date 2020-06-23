import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import NewProjectForm from "./NewProjectForm"
import { NewProjBtn2, MH1, Mod, NewProjectModalCont } from "../../Styles/Jobsheets/index"

const NewProjectPopup = (props) => {
  const {
    className
  } = props;

  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

 
  return (
    <div>
      <NewProjBtn2 onClick={toggle}> New&nbsp;Project</NewProjBtn2>
      <Mod isOpen={modal} toggle={toggle} className={className}>
        <MH1 toggle={toggle}>New Project</MH1>
        <NewProjectModalCont>
          <NewProjectForm toggle={toggle} setProjects={props.setProjects} />
        </NewProjectModalCont>
      </Mod>
    </div>
  );
}

export default NewProjectPopup;