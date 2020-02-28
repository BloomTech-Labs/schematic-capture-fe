import React from "react";

import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// utils
import {
  FormContainer,
  FormRow,
  FormColumn,
  FormGroup,
  StyledField,
  FieldError,
  Button,
  LineOr
} from "../Styles";

import GoogleIcon from "../../../shared/assets/google-icon";

// actions
import { dispatchers } from "../../../shared/actions/authActions";

const Login = props => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { emailLogin, googleLogin } = dispatchers;

  const onSubmit = data => {
    console.log(data);
    dispatch(emailLogin(data, history));
  };

  const onGoogleLogin = event => {
    event.preventDefault();

    dispatch(googleLogin(history));
  };

  return (
    <FormContainer>
      <form className="white" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="signin">Sign in</h2>
        <div style={{ marginBottom: "2rem" }}>
          New user? <Link to="/register">Create an account</Link>
        </div>
        <FormGroup>
          <StyledField
            type="email"
            name="email"
            id="email"
            placeholder="Email"
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
          <StyledField
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            aria-label="Password"
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
            <Link to="/forgotpassword">Forgot account?</Link>
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
  );
};

export default Login;
