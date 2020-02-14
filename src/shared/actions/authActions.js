import { actions as appActions } from "./appActions";
import { axiosWithAuth } from "../utils";
import firebase, { GoogleProvider } from "../utils/firebase";

const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const STORE_GOOGLE_INFO = "STORE_GOOGLE_INFO";
const INVITE_SUCCESS = "INVITE_SUCCESS";

const { APP_LOADING, APP_DONE_LOADING, APP_ERROR } = appActions;

const emailRegistration = (data, history) => dispatch => {
  dispatch({ type: APP_LOADING });

  // sets up request body to match backend requirements
  const { email, password, ...payload } = data;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(idToken => {
      localStorage.setItem("idToken", idToken);
      axiosWithAuth()
        .post("/auth/register", payload)
        .then(res => {
          const user = res.data;

          // stores token and user in localstorage for reducer to grab as initial state on page refresh;
          localStorage.setItem("user", JSON.stringify(user));

          dispatch({ type: APP_DONE_LOADING });
          dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: user });
          history.push("/dashboard");
        })
        .catch(async error => {
          await firebase.auth().currentUser.delete();
          dispatch({ type: APP_ERROR, payload: error.message });
        });
    })
    .catch(error => dispatch({ type: APP_ERROR, payload: error.message }));
};

const emailLogin = (data, history) => dispatch => {
  dispatch({ type: APP_LOADING });

  const { email, password } = data;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(idToken => {
      localStorage.setItem("idToken", idToken);
      axiosWithAuth()
        .post("/auth/login")
        .then(res => {
          const user = res.data;

          // stores token and user in localstorage for reducer to grab as initial state on page refresh;
          localStorage.setItem("user", JSON.stringify(user));

          dispatch({ type: APP_DONE_LOADING });
          dispatch({ type: LOGIN_SUCCESS, payload: user });
          history.push("/dashboard");
        })
        .catch(error => dispatch({ type: APP_ERROR, payload: error.message }));
    })
    .catch(error => dispatch({ type: APP_ERROR, payload: error.message }));
};

const googleRegistration = (data, history) => dispatch => {
  dispatch({ type: APP_LOADING });
  axiosWithAuth()
    .post("/auth/register", data)
    .then(res => {
      const user = res.data;

      // stores token and user in localstorage for reducer to grab as initial state on page refresh;
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: APP_DONE_LOADING });
      dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: user });
      history.push("/dashboard");
    })
    .catch(error => dispatch({ type: APP_ERROR, payload: error.message }));
};

const googleLogin = (history, inviteToken) => dispatch => {
  dispatch({ type: APP_LOADING });
  let googleInfo;

  firebase
    .auth()
    .signInWithPopup(GoogleProvider)
    .then(data => {
      const fullName = data.user.displayName.split(" ");
      googleInfo = {
        email: data.user.email,
        firstName: fullName[0],
        lastName: fullName[fullName.length - 1],
        phone: data.user.phoneNumber
      };

      return data.user.getIdToken();
    })
    .then(idToken => {
      localStorage.setItem("idToken", idToken);
      axiosWithAuth()
        .post("/auth/login") // sends the user's token to get decoded at backend to validate identity
        .then(res => {
          const user = res.data;
          dispatch({ type: APP_DONE_LOADING });
          dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: user });
          history.push("/dashboard");
        })
        .catch(error => {
          /*
            if the account is authenticated on Firebase but has not been
            inserted into the Postgres DB, then the backend will return a
            JSON object with { accountExists: true }. The user gets redirected
            to the Register page component with less fields to complete the onboarding.
          */
          dispatch({ type: APP_DONE_LOADING });
          if (error.response && error.response.data.accountExists === false) {
            dispatch({ type: STORE_GOOGLE_INFO, payload: googleInfo });
            history.push(`/register/${inviteToken || ""}`);
          }
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

const sendInvite = (data, history) => dispatch => {
  dispatch({ type: APP_LOADING });

  axiosWithAuth()
    .post("/auth/invite", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("idToken")
      }
    })
    .then(res => {
      console.log("Invite Sent");
      dispatch({ type: APP_DONE_LOADING });
      dispatch({ type: INVITE_SUCCESS, payload: res.data });
      history.push("/register");
    })
    .catch(error => {
      dispatch({ type: APP_ERROR, payload: error.message });
    });
};

export const actions = {
  CREATE_ACCOUNT_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_SUCCESS,
  STORE_GOOGLE_INFO
};

export const dispatchers = {
  emailRegistration,
  emailLogin,
  googleRegistration,
  googleLogin,
  forgotPassword,
  sendInvite
};
