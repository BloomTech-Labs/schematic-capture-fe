import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// utils
import {
  Container,
  FormContainer,
  FormGroup,
  FieldLabel,
  StyledField,
  FieldError,
  Button, HeadTitle
} from "./Style";
import { noAuthActions } from "../../actions/actions";

const ForgotPassword = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { forgotPassword } = noAuthActions;

  const email = watch("email");

  const forgottenPassword = event => {
    event.preventDefault();
    console.log(email);
    dispatch(forgotPassword(email, history));
  };

  const goBack = event => {
    event.preventDefault();
    window.location="/login";
  };
  return (
    <Container>
      <HeadTitle>
        Schematic Capture
      </HeadTitle>
      <FormContainer>
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
        <Button onClick={forgottenPassword} variant="primary" type="button">
          Continue
        </Button>
        <Button onClick={goBack} variant="secondary" type="button">
          Go Back
        </Button>
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;
