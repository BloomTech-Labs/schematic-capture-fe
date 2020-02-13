import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// import { SegmentedControl } from "segmented-control";

// utils
import {
  Container,
  FormContainer,
  FormRow,
  FormColumn,
  FormGroup,
  FieldLabel,
  StyledField,
  FieldError,
  Button,
  HeadTitle,
  StyledSelect
} from "./Style";

// components
import BackToLink from "../../shared/components/BackToLink";

// actions
import { dispatchers } from "../../shared/actions/authActions";
import { axiosWithAuth } from "../../shared/utils";

const InviteReg = () => {
  const { register, handleSubmit, errors } = useForm();
  const [roles, setRoles] = useState([]);
  // const [roleId, setRoleId] = useState(null);
  // const [roleType, setRoleType] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const { sendInvite } = dispatchers;

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/roles/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("idToken")
        }
      })
      .then(res => {
        console.log(res.data.roles) || setRoles(res.data.roles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data, event) => {
    event.preventDefault();
    dispatch(sendInvite(data, history));
    console.log(data);
  };

  return (
    <Container>
      <HeadTitle>Schematic Capture</HeadTitle>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Send Registration Invitation</h1>
          <FormGroup>
            <StyledField
              type="string"
              name="name"
              id="name"
              placeholder="Full Name"
              aria-label="Full Name"
              ref={register({
                required: true
              })}
            />
            <StyledField
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              aria-label="Email address"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="error-email-required error-email-pattern"
              ref={register({
                required: true,
                pattern: /^\S+@\S+$/i
              })}
            />
            <br />
            <h4>Please indicate level of access for account:</h4>
            <StyledSelect
              name="roleId"
              ref={register({
                required: true
              })}
            >
              {roles.map(role => {
                return (
                  <option
                    key={role.id + new Date()}
                    value={role.id}
                  >
                    {role.name.toUpperCase()}
                  </option>
                );
              })}
            </StyledSelect>
            <br />
            {errors.email && errors.email.type === "required" && (
              <FieldError id="error-email-required">
                Please enter an email address.
              </FieldError>
            )}

            {errors.name && errors.name.type === "required" && (
              <FieldError id="error-name-required">
                Please enter a name.
              </FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <Button variant="primary" submit="button" btnBlock>
              Send Invite Link
            </Button>
          </FormGroup>
          <FormGroup>
            <BackToLink to="/login" text="Login" />
          </FormGroup>
        </form>
      </FormContainer>
    </Container>
  );
};

export default InviteReg;
