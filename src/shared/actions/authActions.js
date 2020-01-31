import { axiosWithAuth } from "../utils";
import firebase, { GoogleProvider } from "../utils/firebase";

const CREATE_ACCOUNT_LOADING = "CREATE_ACCOUNT_LOADING";
const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
const CREATE_ACCOUNT_FAIL = "CREATE_ACCOUNT_FAIL";
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

const userRegistration = (data, history) => dispatch => {
  dispatch({ type: CREATE_ACCOUNT_LOADING });
  console.log(data);

  const payload = {
    email: data.email,
    first_name: data.firstName,
    last_name: data.lastName,
    password: data.password,
    confirmPassword: data.confirmPassword,
    phone: data.phone,
    invite_token: data.inviteToken
  };

  axiosWithAuth()
    .post("/auth/register", payload)
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user);
      dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: res.data });
      history.push("/dashboard");
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: CREATE_ACCOUNT_FAIL });
    });
};

const userLogin = (data, history) => dispatch => {
  dispatch({ type: LOGIN_LOADING });

  axiosWithAuth()
    .post("/auth/login", data)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      history.push("/dashboard");
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: LOGIN_FAIL });
    });
};

const googleLogin = history => dispatch => {
  firebase
    .auth()
    .signInWithPopup(GoogleProvider)
    .then(data => {
      return firebase
        .auth()
        .currentUser.getIdToken()
        .then(token => {
          axiosWithAuth()
            .post("/auth/login", { token })
            .then(res => {
              console.log(res);
              if (res.data.needRegister) {
                history.push(`/gredirect/${token}`);
              } else {
                history.push("/dashboard");
              }
            })
            .catch(error => console.error(error));
        });
    })
    .catch(error => console.error(error));
};

export const actions = {
  userRegistration,
  userLogin,
  googleLogin
};
