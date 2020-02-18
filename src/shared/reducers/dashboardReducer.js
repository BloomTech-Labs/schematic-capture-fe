import { actions } from "../actions/dashboardActions";

const {
  FETCH_CLIENTS_SUCCESS,
  SET_CURRENT_CLIENT,
  SET_CURRENT_PROJECTS
} = actions;

const initState = {
  clients: [],
  currentClient: null,
  currentProjects: []
};

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload
      };
    case SET_CURRENT_CLIENT:
      return {
        ...state,
        currentClient: action.payload
      };
    case SET_CURRENT_PROJECTS:
      return {
        ...state,
        currentProjects: action.payload
      };
    default:
      return state;
  }
};

export default dashboardReducer;
