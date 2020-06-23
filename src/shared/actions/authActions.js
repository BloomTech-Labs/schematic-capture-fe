import { actions as appActions } from "./appActions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const STORE_GOOGLE_INFO = "STORE_GOOGLE_INFO";
const INVITE_SUCCESS = "INVITE_SUCCESS";

const { APP_LOADING, APP_DONE_LOADING, APP_ERROR } = appActions;

const emailLogin = (data, history) => (dispatch) => {
  dispatch({ type: APP_LOADING });

  const { email: username, password } = data;

  axiosWithAuth()
    .post("auth/login", { username, password })
    .then((res) => {
      localStorage.setItem("idToken", res.data.token);
      const user = res.data;

      // stores token and user in localstorage for reducer to grab as initial state on page refresh;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: APP_DONE_LOADING });
      dispatch({ type: LOGIN_SUCCESS, payload: user });
      history.push("/dashboard");
    })
    .catch((err) => dispatch({ type: APP_ERROR, payload: err.message }));
};

const firstLogin = (data, history) => (dispatch) => {
  dispatch({ type: APP_LOADING });

  const { newPassword, newQuestion, newAnswer, token } = data;
  console.log(data);
  axiosWithAuth()
    .post("auth/firstlogin", { newPassword, newQuestion, newAnswer, token })
    .then((res) => {
      localStorage.setItem("idToken", res.data.token);
      const user = res.data;

      // stores token and user in localstorage for reducer to grab as initial state on page refresh;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: APP_DONE_LOADING });
      dispatch({ type: LOGIN_SUCCESS, payload: user });
      history.push("/");
    })
    .catch((err) => dispatch({ type: APP_ERROR, payload: err.message }));
};

const forgotPassword = (data, history) => (dispatch) => {
  dispatch({ type: APP_LOADING });

  axiosWithAuth()
    .post("/auth/forgotpassword", data)
    .then((res) => {
      console.log("Password reset");
      dispatch({ type: APP_DONE_LOADING });
      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res.data.email });
      history.push("/");
    })
    .catch((error) => {
      dispatch({ type: APP_ERROR, payload: error.message });
    });
};

const sendInvite = (data, history) => (dispatch) => {
  dispatch({ type: APP_LOADING });
  console.log(data);

  axiosWithAuth()
    .post("/auth/invite", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("idToken"),
      },
    })
    .then((res) => {
      console.log("Invite Sent");
      dispatch({ type: APP_DONE_LOADING });
      dispatch({ type: INVITE_SUCCESS, payload: res.data });
      history.push("/dashboard");
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: APP_ERROR, payload: error.message });
    });
};

export const actions = {
  CREATE_ACCOUNT_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_SUCCESS,
  STORE_GOOGLE_INFO,
};

export const dispatchers = {
  emailLogin,
  forgotPassword,
  sendInvite,
  firstLogin,
};
