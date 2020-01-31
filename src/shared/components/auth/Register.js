import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// actions
import { actions } from "../../actions/authActions";

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

function Register() {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const { userRegistration } = actions;

    const onSubmit = data => {
        dispatch(userRegistration(data, () => history.push("/dashboard")));
    };

    return (
        <Container>
            <FormContainer>
                <form className="white" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="signup">Sign Up</h1>
                    <FormGroup>
                        <FieldLabel htmlFor="email">Email Address</FieldLabel>
                        <StyledField
                            type="email"
                            id="email"
                            ref={register({
                                required: true,
                                pattern: /^\S+@\S+$/i
                            })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <StyledField
                            type="password"
                            id="password"
                            ref={register({ required: true })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="confirmPassword">
                            Confirm Password
                        </FieldLabel>
                        <StyledField
                            type="password"
                            id="confirmPassword"
                            ref={register({ required: true })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                        <StyledField
                            type="text"
                            id="firstName"
                            ref={register({ required: true, maxLength: 80 })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                        <StyledField
                            type="text"
                            id="lastName"
                            ref={register({ required: true, maxLength: 100 })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                        <StyledField
                            type="number"
                            id="phone"
                            ref={register({
                                required: true,
                                minLength: 7,
                                maxLength: 12
                            })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel htmlFor="inviteToken">
                            Invite Token
                        </FieldLabel>
                        <StyledField
                            type="text"
                            id="inviteToken"
                            ref={register({ required: true })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <PrimaryButton className="signup" type="submit">
                            Register
                        </PrimaryButton>
                    </FormGroup>
                </form>
            </FormContainer>
        </Container>
    );
}

export default Register;
