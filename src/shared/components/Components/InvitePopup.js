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
} from "../../../App/Styles/Jobsheets";
import { dispatchers } from "../../actions/authActions";

import { FieldError } from "../../../App/Styles/FormStyles";
import { useFormContext } from "react-hook-form";

const InviteNewUserModal = ({ buttonLabel, className }) => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({
    name: null,
    email: null,
    role: "technician",
  });
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const history = useHistory();
  const { sendInvite } = dispatchers;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(sendInvite(user, history));
  };

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
               style={{
                height: "4rem",
                width: "30rem",
                border: "1px solid gray",
                borderRadius: "5px",
                paddingLeft: "0.9rem",
                color: "black",
                fontSize: "90%",
                
              }} 
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
               style={{
                height: "4rem",
                width: "30rem",
                border: "1px solid gray",
                borderRadius: "5px",
                paddingLeft: "0.9rem",
                color: "black",
                fontSize: "90%",
                
              }} 
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
               style={{
                height: "4rem",
                width: "30rem",
                border: "1px solid gray",
                borderRadius: "5px",
                paddingLeft: "0.9rem",
                color: "black",
                fontSize: "90%",
                
              }} 
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
            <NewProjBtn2 type="submit">Send Invite</NewProjBtn2>
          </Form>
        </MBody>{" "}
      </>
    );
  };

  return (
    <ModalCont className="testerino">
      {/* <NewProjBtn data-cy="invite-user-btn" onClick={toggle}>
        {buttonLabel}
      </NewProjBtn> */}
      <a className="user-modal-btn" onClick={toggle}>
        Invite User
      </a>
      <Mod isOpen={modal} toggle={toggle}>
        <MH1>Invite New User</MH1>
        <MBody>{Invite(user)}</MBody>
      </Mod>
    </ModalCont>
  );
};

export default InviteNewUserModal;
