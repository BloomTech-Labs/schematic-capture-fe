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
  LineOr,
  HeadTitle
} from "./Style";

import GoogleIcon from "../../assets/google-icon";

// actions
import { dispatchers } from "../../actions/authActions";

const Login = props => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { userLogin, googleLogin } = dispatchers;

  const onSubmit = data => {
    console.log(data);
    dispatch(userLogin(data, history));
  };

  const onGoogleLogin = event => {
    event.preventDefault();

    dispatch(googleLogin(history));
  };

  return (
    <Container>
      <HeadTitle>Schematic Capture</HeadTitle>
      <FormContainer>
        <form className="white" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="signin">Sign in</h1>
          <p>
            New user? <Link to="/register">Create an account</Link>
          </p>
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
          <FormGroup>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <StyledField
              type="password"
              name="password"
              id="password"
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby="error-password-required"
              ref={register({ required: true })}
            />
            {errors.password && errors.password.type === "required" && (
              <FieldError id="error-password-required">
                That's an incorrect password. Try again.
              </FieldError>
            )}
          </FormGroup>
          <FormRow>
            <FormColumn>
              <Button variant="primary" type="submit">
                Continue
              </Button>
            </FormColumn>
            <FormColumn style={{ textAlign: "right" }}>
              <Link to="/forgotpassword" className="forg">
                Forgot your password?
              </Link>
            </FormColumn>
          </FormRow>
        </form>
        <LineOr>
          <p>Or</p>
        </LineOr>
        <Button onClick={onGoogleLogin} variant="secondary" btnBlock>
          <GoogleIcon />
          Continue with Google
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Login;
