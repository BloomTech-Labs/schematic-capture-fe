import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";

// utils
import {
    Container,
    FormContainer,
    FormGroup,
    FieldLabel,
    StyledField,
    FieldError,
    TheButtons,
    PrimaryButton,
    SecondaryButton,
    LineOr
} from "./Style";

// actions
import { actions } from "../../actions/authActions";

type props = {
    background: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
};

const Login = props => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const { userLogin } = actions;

    const onSubmit = data => {
        console.log(data);
        dispatch(userLogin(data, () => history.push("/dashboard")));
    };

    return (
        <Container background="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
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
                            placeholder="************"
                            ref={register({ required: true })}
                        />
                        {errors.password &&
                            errors.password.type === "required" && (
                                <FieldError id="error-password-required">
                                    That's an incorrect password. Try again.
                                </FieldError>
                            )}
                    </FormGroup>
                    <TheButtons>
                        <PrimaryButton type="submit">Login</PrimaryButton>
                    </TheButtons>
                </form>
                <LineOr>
                    <p>or</p>
                </LineOr>
                <SecondaryButton>Continue with Google</SecondaryButton>
            </FormContainer>
        </Container>
    );
};

export default Login;
