import React from "react"

import { useHistory, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

import GoogleIcon from "../../shared/assets/google-icon"

import { dispatchers } from "../../shared/actions/authActions"

const Login = () => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const { emailLogin, googleLogin } = dispatchers

  const onSubmit = data => {
    dispatch(emailLogin(data, history))
  }

  const onGoogleLogin = event => {
    event.preventDefault()
    dispatch(googleLogin(history))
  }

  return (
    <div>
      <form className="white" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="signin">Sign in</h2>
        <div style={{ marginBottom: "2rem" }}>
          New user? <Link to="/register">Create an account</Link>
        </div>
        <div>
          <input
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
              pattern: /^\S+@\S+$/i
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <div id="error-email-required">
              Please enter an email address.
            </div>
          )}
        </div>
        <div>
          <input
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
            <div id="error-password-required">
              That's an incorrect password. Try again.
            </div>
          )}
        </div>
        <div>
          <div>
            <button data-button-continue variant="primary" type="submit">
              Continue
            </button>
          </div>
          <div style={{ textAlign: "right" }}>
            <Link to="/forgotpassword">Forgot password?</Link>
          </div>
        </div>
      </form>
      <div>
        <p>Or</p>
      </div>
      <button onClick={onGoogleLogin} variant="secondary" btnBlock>
        <GoogleIcon />
        Continue with Google
      </button>
    </div>
  )
}

export default Login
