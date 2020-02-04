import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

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
  HeadTitle
} from "./Style";

// actions
import { dispatchers } from "../../actions/authActions";

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { forgotPassword } = dispatchers;

  const onSubmit = data => {
    dispatch(forgotPassword(data, history));
  };

  return (
    <Container>
      <HeadTitle>Schematic Capture</HeadTitle>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Reset Password</h1>
          <FormGroup>
            <FieldLabel htmlFor="email">Email address</FieldLabel>
            {/* use aria-describedby to associate with error messages */}
            {/* the id field is used to associate with aria-describedby */}
            <StyledField
              type="email"
              name="email"
              id="email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="error-email-required error-email-pattern"
              ref={register({
                required: true,
                pattern: /^\S+@\S+$/i
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <FieldError id="error-email-required">
                Please enter an email address.
              </FieldError>
            )}
          </FormGroup>
          <FormRow>
            <FormColumn>
              <Link to="/login">
                <div style={{ marginRight: "8px" }}>
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    style={{
                      height: "1em",
                      width: "1em",
                      display: "block",
                      fill: "currentcolor"
                    }}
                  >
                    <path
                      d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                Back to Login
              </Link>
            </FormColumn>
            <FormColumn>
              <Button
                variant="primary"
                submit="button"
                style={{ textAlign: "right" }}
              >
                Send reset link
              </Button>
            </FormColumn>
          </FormRow>
        </form>
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;
