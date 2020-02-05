import { actions as appActions } from "./appActions";
import { axiosWithAuth } from "../utils";
import firebase, { GoogleProvider } from "../utils/firebase";

const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const GOOGLE_AUTH_REDIRECT = "GOOGLE_AUTH_REDIRECT";
const GOOGLE_AUTH_SUCCESS = "GOOGLE_AUTH_SUCCESS";

const { APP_LOADING, APP_DONE_LOADING, APP_ERROR } = appActions;

const userRegistration = (data, history) => dispatch => {
  dispatch({ type: APP_LOADING });

  // sets up request body to match backend requirements
  const { confirmPassword, ...payload } = data;

  axiosWithAuth()
    .post("/auth/register", payload)
    .then(res => {
      const { idToken, ...user } = res.data;

      // stores token and user in localstorage for reducer to grab as initial state on page refresh;
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: APP_DONE_LOADING });
      dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: res.data });
      history.push("/dashboard");
    })
    .catch(error => dispatch({ type: APP_ERROR, payload: error.message }));
};

const userLogin = (data, history) => dispatch => {
  dispatch({ type: APP_LOADING });

  axiosWithAuth()
    .post("/auth/login", data)
    .then(res => {
      const { idToken, ...user } = res.data;

      // stores token and user in localstorage for reducer to grab as initial state on page refresh;
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: APP_DONE_LOADING });
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      history.push("/dashboard");
    })
    .catch(error => dispatch({ type: APP_ERROR, payload: error.message }));
};

const googleLogin = (history, inviteToken) => dispatch => {
  dispatch({ type: APP_LOADING });

  firebase
    .auth()
    .signInWithPopup(GoogleProvider)
    .then(() => {
      firebase // performs a nested chain to get the token of the user that just signed in
        .auth()
        .currentUser.getIdToken()
        .then(idToken => {
          axiosWithAuth()
            .post("/auth/login", { idToken }) // sends the user's token to get decoded at backend to validate identity
            .then(res => {
              if (res.data.needRegister) {
                /*
                  if the account is authenticated on Firebase but has not been
                  inserted into the Postgres DB, then the backend will return a
                  JSON object with { needRegister: true }. The user gets redirected
                  to the Register page component with less fields to complete the onboarding.
                */

                dispatch({ type: APP_DONE_LOADING });
                dispatch({ type: GOOGLE_AUTH_REDIRECT, payload: idToken });
                if (inviteToken) {
                  history.push(`/gredirect/${idToken}/${inviteToken}`);
                } else {
                  history.push(`/gredirect/${idToken}`);
                }
              } else {
                dispatch({ type: APP_DONE_LOADING });
                dispatch({ type: GOOGLE_AUTH_SUCCESS, payload: res.data });
                history.push("/dashboard");
              }
            })
            .catch(error =>
              dispatch({ type: APP_ERROR, payload: error.message })
            );
        });
    })
    .catch(error => dispatch({ type: APP_ERROR, payload: error.message }));
};

const forgotPassword = (data, history) => dispatch => {
  dispatch({ type: APP_LOADING });

  axiosWithAuth()
    .post("/auth/forgotpassword", data)
    .then(res => {
      console.log("Password reset");
      dispatch({ type: APP_DONE_LOADING });
      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res.data.email });
      history.push("/login");
    })
    .catch(error => {
      dispatch({ type: APP_ERROR, payload: error.message });
    });
};

export const actions = {
  CREATE_ACCOUNT_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  GOOGLE_AUTH_SUCCESS,
  LOGIN_SUCCESS
};

export const dispatchers = {
  userRegistration,
  userLogin,
  googleLogin,
  forgotPassword
};
