import { axiosWithAuth } from "../utils";

const FORGOT_PASSWORD_LOADING = "FORGOT_PASSWORD_LOADING";
const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

const forgotPassword = (email, history) => dispatch => {
  dispatch({ type: FORGOT_PASSWORD_LOADING });

  console.log(email);

  axiosWithAuth()
    .post("/auth/forgotpassword", { email })
    .then(res => {
      console.log("Email successfully sent / Password reset");
      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res.data.email });
      history.push("/login");
    })
    .catch(error => {
      console.log(error.message);
      dispatch({ type: FORGOT_PASSWORD_FAILED });
    });
};

export const noAuthActions = {
  forgotPassword
};
