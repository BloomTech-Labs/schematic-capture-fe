import { actions } from "../actions/appActions";

const { APP_LOADING, APP_DONE_LOADING, APP_ERROR, RESET_ERROR } = actions;

const initState = {
  isLoading: false,
  error: null
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case APP_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case APP_DONE_LOADING:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case APP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case RESET_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
};

export default appReducer;
