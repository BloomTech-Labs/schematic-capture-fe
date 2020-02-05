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

// components
import BackToLink from "../BackToLink";

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
            {/* <FieldLabel htmlFor="email">Email address</FieldLabel> */}
            {/* use aria-describedby to associate with error messages */}
            {/* the id field is used to associate with aria-describedby */}
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
            {errors.email && errors.email.type === "required" && (
              <FieldError id="error-email-required">
                Please enter an email address.
              </FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <Button variant="primary" submit="button" btnBlock>
              Send reset link
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

export default ForgotPassword;
