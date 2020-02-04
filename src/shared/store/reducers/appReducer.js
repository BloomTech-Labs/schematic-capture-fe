import { actions } from "../../actions/appActions";

const { APP_LOADING, APP_DONE_LOADING, APP_ERROR } = actions;

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
        isLoading: false
      };
    case APP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
