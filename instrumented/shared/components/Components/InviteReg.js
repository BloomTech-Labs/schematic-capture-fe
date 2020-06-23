import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

// utils
import { Button } from "../../../App/Styles/Auth/loginStyles";
import { StyledField, FieldError } from '../../../App/Styles/FormStyles'
import {
  StyledSelect,
  InviteGroup,
  InviteContainer,
  InviteForm,
  InviteTitle,
  InviteGroupBack,
  AccessText,
} from "../Styles/Invite-Styles";

// components
import BackToLink from "./BackToLink";

// actions
import { dispatchers } from "../../actions/authActions";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const InviteReg = ({ handleClose }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [roles, setRoles] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const { sendInvite } = dispatchers;

  useEffect(() => {
    axiosWithAuth()
      .get("/roles/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("idToken"),
        },
      })
      .then((res) => {
        const rolesArr = res.data;
        setRoles(rolesArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data, event) => {
    let roleName;
    if (data.roleId == 1) {
      roleName = "an Admin";
    } else if (data.roleId == 2) {
      roleName = "an Employee";
    } else if (data.roleId == 3) {
      roleName = "a Technician";
    }

    event.preventDefault();
    swal({
      title: `Are you sure?`,
      text: `This will send an invite to ${data.email} as ${roleName}.`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        dispatch(sendInvite(data, history));
        swal("Invite sent!", {
          icon: "success",
          timer: 8000,
        }).then(() => {
          reset();
        });
      } else {
        swal("Invite not sent!", {
          icon: "error",
        });
        reset();
      }
    });
    console.log(data);
  };

  return (
    <InviteContainer>
      <InviteForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InviteTitle>Send Registration Invitation</InviteTitle>
          <InviteGroup>
            <StyledField
              data-full-name
              type="string"
              name="name"
              id="name"
              placeholder="Full Name"
              aria-label="Full Name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="error-name-required error-name-pattern"
              ref={register({
                required: true,
              })}
            />
            <StyledField
              data-email-address
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              aria-label="Email address"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="error-email-required error-email-pattern"
              ref={register({
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            <br />
            <AccessText>
              Please indicate level of access for account:
            </AccessText>
            <StyledSelect
              data-select-role
              name="roleId"
              ref={register({
                required: true,
              })}
            >
              {roles.map((role) => {
                return (
                  <option key={role.id + new Date()} value={role.id}>
                    {role.name.toUpperCase()}
                  </option>
                );
              })}
            </StyledSelect>

            <br />
            {errors.email && errors.email.type === "required" && (
              <FieldError data-error-email id="error-email-required">
                Please enter an email address.
              </FieldError>
            )}

            {errors.name && errors.name.type === "required" && (
              <FieldError data-error-name id="error-name-required">
                Please enter a name.
              </FieldError>
            )}
          </InviteGroup>
          <InviteGroup>
            <Button
              data-button-invite
              variant="primary"
              submit="button"
              onClick={handleClose}
              btnBlock
            >
              Send Invite Link
            </Button>
          </InviteGroup>
          <InviteGroupBack>
            <BackToLink to="/dashboard" text="Back to Dashboard" />
          </InviteGroupBack>
        </form>
      </InviteForm>
    </InviteContainer>
  );
};

export default InviteReg;
