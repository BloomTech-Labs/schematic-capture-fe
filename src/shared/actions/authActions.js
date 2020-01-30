import { axiosWithAuth } from "../utils";
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

const userLogin = (data, redirect) => dispatch => {
    dispatch({ type: LOGIN_LOADING });

    axiosWithAuth()
        .post("/auth/login", data)
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.user);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(error => {
            console.log(error.response);
            dispatch({ type: LOGIN_FAIL });
        });
};

export const actions = {
    userLogin
};
