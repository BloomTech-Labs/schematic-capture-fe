import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
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

// TODO Print error on user account already exists.

function Register({ gRedirect }) {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const { userRegistration, googleLogin } = dispatchers;

  const onSubmit = data => {
    if (gRedirect) {
      data.idToken = params.idToken;
    }

    dispatch(userRegistration(data, history));
  };

  const onGoogleLogin = event => {
    event.preventDefault();

    dispatch(googleLogin(history, params.inviteToken));
  };

  return (
    <Container>
      <HeadTitle>Schematic Capture</HeadTitle>
      <FormContainer>
        <form className="white" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="signup">Create an account</h1>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
          {!gRedirect && (
            <>
              <FormRow>
                <FormColumn>
                  <FormGroup>
                    {/* <FieldLabel htmlFor="firstName" id="first">
                      First name
                    </FieldLabel> */}
                    <StyledField
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="column"
                      placeholder="First name"
                      aria-label="First name"
                      aria-invalid={errors.firstName ? "true" : "false"}
                      aria-describedby="error-firstName-required error-firstName-maxLength"
                      ref={register({ required: true, maxLength: 80 })}
                    />
                    {errors.firstName &&
                      errors.firstName.type === "required" && (
                        <FieldError id="error-firstName-required">
                          Please enter your first name.
                        </FieldError>
                      )}
                  </FormGroup>
                </FormColumn>
                <FormColumn>
                  <FormGroup>
                    {/* <FieldLabel htmlFor="lastName">Last name</FieldLabel> */}
                    <StyledField
                      type="text"
                      id="lastName"
                      name="lastName"
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
                {/* <FieldLabel htmlFor="email">Email address</FieldLabel> */}
                {/* use aria-describedby to associate with error messages */}
                {/* the id field is used to associate with aria-describedby */}
                <StyledField
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  aria-label="Email"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby="error-email-required error-email-pattern"
                  ref={register({
                    required: !gRedirect,
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
                {/* <FieldLabel htmlFor="password">Password</FieldLabel> */}
                <StyledField
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  aria-label="Password"
                  aria-invalid={errors.password ? "true" : "false"}
                  aria-describedby="error-password-required"
                  ref={register({ required: !gRedirect })}
                />
                {errors.password && errors.password.type === "required" && (
                  <FieldError id="error-password-required">
                    Please enter a password.
                  </FieldError>
                )}
              </FormGroup>
              <FormGroup>
                {/* <FieldLabel htmlFor="confirmPassword">
                  Confirm password
                </FieldLabel> */}
                <StyledField
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  aria-label="Confirm password"
                  ref={register({ required: !gRedirect })}
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
            {/* <FieldLabel htmlFor="phone">Phone number</FieldLabel> */}
            <StyledField
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              aria-label="Phone number"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby="error-phone-required error-phone-maxLength"
              ref={register({
                required: true,
                minLength: 7,
                maxLength: 12
              })}
            />
            {errors.phone && errors.phone.type === "required" && (
              <FieldError id="error-lastName-required">
                Please enter your phone number.
              </FieldError>
            )}
          </FormGroup>
          <FormGroup hidden={!!params.inviteToken}>
            {/* <FieldLabel htmlFor="inviteToken">Invite token</FieldLabel> */}
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
              {gRedirect ? "Continue" : "Create account"}
            </Button>
          </FormGroup>
        </form>
        {!gRedirect && (
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
    </Container>
  );
}

export default Register;
