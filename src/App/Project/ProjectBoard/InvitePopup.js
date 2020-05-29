import React, { useState } from "react";
import { Modal, Form, FormGroup, Input, Label } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  NewProjBtn2,
  NewProjBtn,
  TechCont,
  MBody,
  MH1,
  ModalCont,
  Container,
  Mod,
  BtnCont,
} from "../../Styles/Jobsheets";
import { dispatchers } from "../../../shared/actions/authActions";

import { FieldError } from "../../Styles/FormStyles";
import { useFormContext } from "react-hook-form";

const InviteNewUserModal = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({ name: null, email: null, role: "technician" });
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const history = useHistory();
  const { sendInvite } = dispatchers;

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(sendInvite(user, history))
  }
    
  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  // const handleEmailChange = (e) => {
  //   setUser({ ...user, email: e.target.value });
  //   console.log(e.target.value);
  // };
  const Invite = () => {
    return (
      <>
        <MH1></MH1>
        <MBody>
          {user.name === null || user.email === null ? (
            <Container>
              <FieldError>All Fields Required.</FieldError>
            </Container>
          ) : (
            <></>
          )}

          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="Name">Full Name</Label>
              <Input
                type="Name"
                value={user.name}
                id="name"
                placeholder="Type Full Name"
                name="name"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                value={user.email}
                id="exampleEmail"
                placeholder="Type Email"
                name="email"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">Select Role</Label>
              <Input
                type="select"
                name="role"
                id="exampleSelect"
                value={user.role}
                onChange={handleChange}
              >
                <option value="technician">Technician</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </Input>
            </FormGroup>
            <button type="submit">Send Invite</button>
          </Form>
        </MBody>{" "}
      </>
    );
  };

  return (
    <ModalCont>
      <NewProjBtn onClick={toggle}>{buttonLabel}</NewProjBtn>
      <Mod isOpen={modal} toggle={toggle}>
        <MH1>Invite New User</MH1>
        <MBody>{Invite(user)}</MBody>
      </Mod>
    </ModalCont>
  );
};

export default InviteNewUserModal;
