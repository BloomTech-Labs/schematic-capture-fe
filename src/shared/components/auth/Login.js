import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// utils
import { FieldLabel, StyledField } from "./Style";

// actions
import { actions } from "../../actions/authActions";

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = data => {
        dispatch(actions.userLogin(data), () => history.push("/dashboard"));
    };

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit(onSubmit)}>
                <h5 className="signin">Sign In</h5>
                <div className="input-field">
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <StyledField
                        type="email"
                        name="email"
                        id="email"
                        ref={register()}
                    />
                </div>
                <div className="input-field">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <StyledField
                        type="password"
                        id="password"
                        name="password"
                        ref={register()}
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;
