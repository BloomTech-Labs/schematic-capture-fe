import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import GoogleIcon from "../../shared/assets/google-icon";

import { dispatchers } from "../../shared/actions/authActions";

import {
  FormContainer,
  FormRow,
  FormColumn,
  FormGroup,
  StyledField,
  FieldError,
  Button,
  LineOr,
} from "../Styles/Auth/loginStyles";

function Register() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const googleInfo = useSelector((state) => state.auth.googleInfo);
  const { emailRegistration, googleRegistration, googleLogin } = dispatchers;

  const onSubmit = (data) => {
    if (googleInfo) {
      dispatch(googleRegistration(data, history));
    } else {
      dispatch(emailRegistration(data, history));
    }
  };

  const onGoogleLogin = (event) => {
    event.preventDefault();
    dispatch(googleLogin(history, params.inviteToken));
  };

  return (
    <FormContainer>
      <form className="white" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="signup">Create an account</h2>
        <div style={{ marginBottom: "2rem" }}>
          Already have an account? <Link to="/">Sign in</Link>
        </div>
        <FormRow>
          <FormColumn>
            <FormGroup>
              <StyledField
                type="text"
                id="firstName"
                name="firstName"
                defaultValue={googleInfo && googleInfo.firstName}
                className="column"
                placeholder="First name"
                aria-label="First name"
                aria-invalid={errors.firstName ? "true" : "false"}
                aria-describedby="error-firstName-required error-firstName-maxLength"
                ref={register({ required: true, maxLength: 80 })}
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <FieldError id="error-firstName-required">
                  Please enter your first name.
                </FieldError>
              )}
            </FormGroup>
          </FormColumn>
          <FormColumn>
            <FormGroup>
              <StyledField
                type="text"
                id="lastName"
                name="lastName"
                defaultValue={googleInfo && googleInfo.lastName}
                placeholder="Last name"
                aria-label="Last name"
                aria-invalid={errors.lastName ? "true" : "false"}
                aria-describedby="error-lastName-required error-lastName-maxLength"
                ref={register({ required: true, maxLength: 100 })}
              />
              {errors.lastName && errors.lastName.type === "required" && (
                <FieldError id="error-lastName-required">
                  Please enter your last name.
                </FieldError>
              )}
            </FormGroup>
          </FormColumn>
        </FormRow>
        <FormGroup>
          <StyledField
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            aria-label="Email"
            defaultValue={googleInfo && googleInfo.email}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="error-email-required error-email-pattern"
            ref={register({
              required: !googleInfo,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <FieldError id="error-email-required">
              Please enter an email address.
            </FieldError>
          )}
        </FormGroup>
        {!googleInfo && (
          <>
            <FormGroup>
              <StyledField
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                aria-label="Password"
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby="error-password-required"
                ref={register({ required: !googleInfo })}
              />
              {errors.password && errors.password.type === "required" && (
                <FieldError id="error-password-required">
                  Please enter a password.
                </FieldError>
              )}
            </FormGroup>
            <FormGroup>
              <StyledField
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
                aria-label="Confirm password"
                ref={register({ required: !googleInfo })}
              />
              {errors.confirmPassword &&
                errors.confirmPassword.type === "required" && (
                  <FieldError id="error-firstName-required">
                    Please enter your first name.
                  </FieldError>
                )}
            </FormGroup>
          </>
        )}
        <FormGroup>
          <StyledField
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone number"
            defaultValue={googleInfo && googleInfo.phone}
            aria-label="Phone number"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby="error-phone-required error-phone-maxLength"
            ref={register({
              required: true,
              minLength: 7,
              maxLength: 12,
            })}
          />
          {errors.phone && errors.phone.type === "required" && (
            <FieldError id="error-lastName-required">
              Please enter your phone number.
            </FieldError>
          )}
        </FormGroup>
        <FormGroup hidden={!!params.inviteToken}>
          <StyledField
            type="text"
            id="inviteToken"
            name="inviteToken"
            placeholder="Invite token"
            aria-label="Invite token"
            ref={register({ required: !params.inviteToken })}
            defaultValue={params.inviteToken}
          />
          {errors.inviteToken && errors.inviteToken.type === "required" && (
            <FieldError id="error-lastName-required">
              Please enter an invite token.
            </FieldError>
          )}
        </FormGroup>
        <FormGroup>
          <Button variant="primary" type="submit">
            {googleInfo ? "Continue" : "Create account"}
          </Button>
        </FormGroup>
      </form>
      {!googleInfo && (
        <>
          <LineOr>
            <p>Or</p>
          </LineOr>
          <Button onClick={onGoogleLogin} variant="secondary" btnBlock>
            <GoogleIcon />
            Continue with Google
          </Button>
        </>
      )}
    </FormContainer>
  );
}

export default Register;
