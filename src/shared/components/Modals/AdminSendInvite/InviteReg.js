import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { SegmentedControl } from "segmented-control";

// utils
import {
  FormGroup,
  StyledField,
  FieldError,
  Button,
  StyledSelect
} from "../../../../App/Auth/Style";

import { InviteContainer, InviteForm } from "./Styles";

// components
import BackToLink from "../../BackToLink";

// actions
import { dispatchers } from "../../../actions/authActions";
import { axiosWithAuth } from "../../../utils";

const InviteReg = ({ handleClose, show, children }) => {
  const { register, handleSubmit, errors } = useForm();
  const [roles, setRoles] = useState([]);
  const [theValue, setTheValue] = useState(null);
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
    <InviteContainer>
      <InviteForm>
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
              hidden
              name="roleId"
              ref={register({
                required: true
              })}
            >
              {roles.map(role => {
                return (
                  <option
                    key={role.id + new Date()}
                    value={theValue}
                  >
                    {role.name.toUpperCase()}
                  </option>
                );
              })}
            </StyledSelect>

            <SegmentedControl
              name="roleId"
              ref={register({
                required: true
              })}
              options={[
                { label: "Admin", value: 1 },
                { label: "Employee", value: 2, default: true },
                { label: "Technician", value: 3 }
              ]}
              setValue={newValue => setTheValue(newValue)}
              onClick={console.log(theValue)}
            >
            </SegmentedControl>

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
            <Button
              variant="primary"
              submit="button"
              onClick={handleClose}
              btnBlock
            >
              Send Invite Link
            </Button>
          </FormGroup>
          <FormGroup>
            <BackToLink to="/login" text="Login" />
          </FormGroup>
        </form>
      </InviteForm>
    </InviteContainer>
  );
};

export default InviteReg;
