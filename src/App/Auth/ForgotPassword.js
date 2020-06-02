import React from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

import {
  FormContainer,
  FormGroup,
  StyledField,
  FieldError
} from "../Styles/FormStyles"

import { Button } from "../Styles/Auth/loginStyles"

import { BackToLink } from "../../shared/components"

import { dispatchers } from "../../shared/actions/authActions"

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const { forgotPassword } = dispatchers

  const onSubmit = (data) => {
    dispatch(forgotPassword(data, history))
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 style={{ marginBottom: "2rem" }}>Reset Password</h2>
        <p>
          <b>If your email address is registered</b>, you will recieve an
          emailed password reset link. <br /> You will also be routed back to
          the login page.
        </p>
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
          <Button variant="primary" submit="button" btnBlock>
            Send reset link
          </Button>
        </FormGroup>
        <FormGroup>
          <BackToLink to="/" text="Login" />
        </FormGroup>
      </form>
    </FormContainer>
  )
}

export default ForgotPassword
