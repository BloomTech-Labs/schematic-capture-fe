import { axiosWithAuth } from "../utils";

const CREATE_ACCOUNT_LOADING = "CREATE_ACCOUNT_LOADING";
const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
const CREATE_ACCOUNT_FAIL = "CREATE_ACCOUNT_FAIL";
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

const userRegistration = (data, redirect) => dispatch => {
    dispatch({ type: CREATE_ACCOUNT_LOADING });

    axiosWithAuth()
        .post("/auth/register", data)
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.user);
            dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: res.data });
            redirect();
        })
        .catch(error => {
            console.log(error.response);
            dispatch({ type: CREATE_ACCOUNT_FAIL });
        });
};

const userLogin = (data, redirect) => dispatch => {
    dispatch({ type: LOGIN_LOADING });

    axiosWithAuth()
        .post("/auth/login", data)
        .then(res => {
            console.log(redirect);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            redirect();
        })
        .catch(error => {
            console.log(error.response);
            dispatch({ type: LOGIN_FAIL });
        });
};

export const actions = {
    userRegistration,
    userLogin
};
