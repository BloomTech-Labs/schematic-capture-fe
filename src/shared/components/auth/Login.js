import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";

// import { GLogin } from "./googleLogin";

// utils
import {
    Container,
    FormContainer,
    FormGroup,
    FieldLabel,
    StyledField,
    FieldError,
    PrimaryButton,
    LineOr
} from "./Style";

// actions
import { actions } from "../../actions/authActions";

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const { userLogin } = actions;

    const onSubmit = data => {
        console.log(data);
        dispatch(userLogin(data, () => history.push("/dashboard")));
    };

    return (
        <Container>
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
                    <PrimaryButton type="submit">Login</PrimaryButton>
                </form>
                <LineOr>
                    <p>or</p>
                </LineOr>
                {/* <GLogin /> */}
            </FormContainer>
        </Container>
    );
};

export default Login;
