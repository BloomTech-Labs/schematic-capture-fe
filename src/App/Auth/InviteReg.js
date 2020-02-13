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
      //     .then(res => {
      //       const roledata = res.data.roles;
      //       {
      //         roledata.map(role => {
      //           console.log(role);
      //           let theId = role.id;
      //           let theType = role.type;
      //           for (theId; theId < roledata.length; theId++) {
      //             if (theId && theType) {
      //               setRoleId(theId);
      //               setRoleType(theType);
      //               break;
      //             }
      //           }
      //         });
      //       }
      //     })
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
            {/* <FieldLabel htmlFor="email">Email address</FieldLabel> */}
            {/* use aria-describedby to associate with error messages */}
            {/* the id field is used to associate with aria-describedby */}
            <StyledField
              type="string"
              name="name"
              id="name"
              placeholder="Full Name"
              aria-label="Full Name"
              // aria-invalid={errors.name ? "true" : "false"}
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
                    // onClick={getRole}
                  >
                    {role.name.toUpperCase()}
                  </option>
                );
              })}
            </StyledSelect>
            <br />

            {/*<SegmentedControl*/}
            {/*    name="roleId"*/}
            {/*    id="roleId"*/}
            {/*    ref={register({*/}
            {/*        required: true*/}
            {/*    })}*/}
            {/*    options={[*/}
            {/*        { label: "Admin", value: 1 },*/}
            {/*        { label: "Technician", value: 2, default: true },*/}
            {/*        { label: "Employee", value: 3 }*/}
            {/*        ]}*/}
            {/*>*/}
            {/*</SegmentedControl>*/}

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
