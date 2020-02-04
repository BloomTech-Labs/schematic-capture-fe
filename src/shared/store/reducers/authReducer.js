import { actions } from "../../actions/authActions";

const initState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  inviteToken: "",
  token: "",
  isLoading: false,
  error: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.CREATE_ACCOUNT_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case actions.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case actions.CREATE_ACCOUNT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
