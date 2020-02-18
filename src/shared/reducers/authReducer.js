import { actions } from "../actions/authActions";

const { CREATE_ACCOUNT_SUCCESS, LOGIN_SUCCESS, STORE_GOOGLE_INFO } = actions;

const initState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  googleInfo: null,
  isLoading: false,
  error: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case STORE_GOOGLE_INFO:
      return {
        ...state,
        googleInfo: action.payload
      };
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
