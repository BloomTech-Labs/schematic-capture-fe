import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// utils
import {
  Container,
  FormContainer,
  FormGroup,
  StyledField,
  FieldError,
  Button,
  HeadTitle
} from "./Style";

// components
import BackToLink from "../../shared/components/BackToLink";

// actions
import { dispatchers } from "../../shared/actions/authActions";

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
