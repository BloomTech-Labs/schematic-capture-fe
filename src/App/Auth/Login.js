import React from "react"

import { useHistory, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

import { dispatchers } from "../../shared/actions/authActions"

import {
  FormContainer,
  FormRow,
  FormColumn,
  FormGroup,
  StyledField,
  FieldError
} from "../Styles/FormStyles"

import { Button, Signin } from "../Styles/Auth/loginStyles"

const Login = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const { emailLogin } = dispatchers

  const onSubmit = (data) => {
    dispatch(emailLogin(data, history))
  }

  return (
    <FormContainer>
      <form className="white" onSubmit={handleSubmit(onSubmit)}>
        <Signin className="signin">Sign in</Signin>
        <FormGroup>
          <StyledField
            data-email-address
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            aria-label="Email address"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="error-email-required error-email-pattern"
            ref={register({
              required: true,
              pattern: /^\S+@\S+$/i,
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
            data-password
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
            <Button data-button-continue variant="primary" type="submit">
              Continue
            </Button>
          </FormColumn>
          <FormColumn style={{ textAlign: "right" }}>
            <Link to="/forgotpassword">Forgot password?</Link>
          </FormColumn>
        </FormRow>
      </form>
    </FormContainer>
  )
}

export default Login
