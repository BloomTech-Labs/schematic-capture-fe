import { actions } from "../../actions/authActions";

const { CREATE_ACCOUNT_SUCCESS, LOGIN_SUCCESS } = actions;

const initState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  idToken: "",
  isLoading: false,
  error: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default authReducer;
