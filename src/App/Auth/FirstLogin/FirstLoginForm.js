import React from "react"

import { useHistory, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

import { dispatchers } from "../../../shared/actions/authActions"

import {
  FormContainer,
  FormRow,
  FormColumn,
  FormGroup,
  StyledField,
  StyledSelect,
  FieldError
} from "../../Styles/FormStyles"

import { Button, Signin } from "../../Styles/Auth/loginStyles"

const FirstLoginForm = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const { firstLogin } = dispatchers

  const onSubmit = (data) => {
    dispatch(firstLogin(data = {...data, token: props.match.params.userToken }, history))
  }

  return (
    <FormContainer>
      <form className="white" onSubmit={handleSubmit(onSubmit)}>
        <Signin className="signin">First Time Log-in</Signin>
        <FormGroup>
          <StyledField
            data-password
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="New Password"
            aria-label="New Password"
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
        <FormGroup>
          <label> Select Security Question 
          <StyledSelect
            name="newQuestion" 
            label="Select Security Question"
            ref={register({ required: true })}>
            <option value="What was your childhood nickname?">What was your childhood nickname?</option>
            <option value=" In what city did you meet your spouse/significant other?"> In what city did you meet your spouse/significant other?</option>
            <option value=" What is the name of your favorite childhood friend?"> What is the name of your favorite childhood friend?</option>
            <option value="What street did you live on in third grade?">What street did you live on in third grade?</option>
            <option value="What is your oldest sibling's middle name?">What is your oldest sibling's middle name?</option>
            <option value="In what city or town was your first job?">In what city or town was your first job?</option>
          </StyledSelect>
          </label>
        </FormGroup>
        <FormGroup>
          <StyledField
          // @TODO: Finish Field for security answer:
          name="newAnswer"
          id="answer"
          ref={register({ required: true })}
          placeholder="Answer to Security Question"
          aria-label="Answer to Security Question"
          />
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

export default FirstLoginForm
