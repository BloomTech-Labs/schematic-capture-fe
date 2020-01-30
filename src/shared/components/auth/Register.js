import React, { Component } from "react";
import { useForm } from "react-hook-form";

// styles
import { FieldLabel, StyledField } from "./Style";

function Register() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = event => {
        event.preventDefault();
    };

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit(onSubmit)}>
                <h5 className="signup">Sign Up</h5>
                <div className="input-field">
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <StyledField
                        type="email"
                        id="email"
                        ref={register({
                            required: true,
                            pattern: /^\S+@\S+$/i
                        })}
                    />
                </div>
                <div className="input-field">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <StyledField
                        type="password"
                        id="password"
                        ref={register({ required: true })}
                    />
                </div>
                <div className="input-field">
                    <FieldLabel htmlFor="confirmPassword">
                        Confirm Password
                    </FieldLabel>
                    <StyledField
                        type="password"
                        id="confirmPassword"
                        ref={register({ required: true })}
                    />
                </div>
                <div className="input-field">
                    <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                    <StyledField
                        type="text"
                        id="firstName"
                        ref={register({ required: true, maxLength: 80 })}
                    />
                </div>
                <div className="input-field">
                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                    <StyledField
                        type="text"
                        id="lastName"
                        ref={register({ required: true, maxLength: 100 })}
                    />
                </div>
                <div className="input-field">
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
                </div>
                <div className="input-field">
                    <FieldLabel htmlFor="inviteToken">Invite Token</FieldLabel>
                    <StyledField
                        type="text"
                        id="inviteToken"
                        ref={register({ required: true })}
                    />
                </div>
                <div className="input-field">
                    <button className="signup" type="submit">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
