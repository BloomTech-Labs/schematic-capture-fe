import { axiosWithAuth } from "../utils";
import firebase, { GoogleProvider } from "../utils/firebase";

const CREATE_ACCOUNT_LOADING = "CREATE_ACCOUNT_LOADING";
const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
const CREATE_ACCOUNT_FAIL = "CREATE_ACCOUNT_FAIL";
const GOOGLE_AUTH_LOADING = "GOOGLE_AUTH_LOADING";
const GOOGLE_AUTH_REDIRECT = "GOOGLE_AUTH_REDIRECT";
const GOOGLE_AUTH_SUCCESS = "GOOGLE_AUTH_SUCCESS";
const GOOGLE_AUTH_FAIL = "GOOGLE_AUTH_FAIL";
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

const userRegistration = (data, history) => dispatch => {
  dispatch({ type: CREATE_ACCOUNT_LOADING });

  // sets up request body to match backend requirements
  const { confirmPassword, ...payload } = data;

  axiosWithAuth()
    .post("/auth/register", payload)
    .then(res => {
      const { token, ...user } = res.data;

      // stores token and user in localstorage for reducer to grab as initial state on page refresh;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: res.data });
      history.push("/dashboard");
    })
    .catch(error => dispatch({ type: CREATE_ACCOUNT_FAIL }));
};

const userLogin = (data, history) => dispatch => {
  dispatch({ type: LOGIN_LOADING });

  axiosWithAuth()
    .post("/auth/login", data)
    .then(res => {
      const { token, ...user } = res.data;

      // stores token and user in localstorage for reducer to grab as initial state on page refresh;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      history.push("/dashboard");
    })
    .catch(error => dispatch({ type: LOGIN_FAIL, payload: error.message }));
};

const googleLogin = (history, inviteToken) => dispatch => {
  dispatch({ type: GOOGLE_AUTH_LOADING });

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

                dispatch({ type: GOOGLE_AUTH_REDIRECT, payload: idToken });
                if (inviteToken) {
                  history.push(`/gredirect/${idToken}/${inviteToken}`);
                } else {
                  history.push(`/gredirect/${idToken}`);
                }
              } else {
                dispatch({ type: GOOGLE_AUTH_SUCCESS, payload: res.data });
                history.push("/dashboard");
              }
            })
            .catch(error =>
              dispatch({ type: GOOGLE_AUTH_FAIL, payload: error.message })
            );
        });
    })
    .catch(error =>
      dispatch({ type: GOOGLE_AUTH_FAIL, payload: error.message })
    );
};

export const actions = {
  CREATE_ACCOUNT_LOADING,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAIL,
  GOOGLE_AUTH_LOADING,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL
};

export const dispatchers = {
  userRegistration,
  userLogin,
  googleLogin
};
