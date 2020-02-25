import { actions } from "../actions/dashboardActions";

const {
  FETCH_CLIENTS_SUCCESS,
  SET_CURRENT_CLIENT,
  SET_CURRENT_PROJECTS,
  SET_CURRENT_PROJECT,
  SET_CURRENT_JOBSHEETS,
  SET_CURRENT_JOBSHEET
} = actions;

const initState = {
  clients: [],
  currentProjects: [],
  currentClient: null,
  currentProject: null,
  currentJobsheets: [],
  currentJobsheet: null
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
    case SET_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: action.payload
      };
    case SET_CURRENT_JOBSHEETS:
      return {
        ...state,
        currentJobsheets: action.payload
      };
    case SET_CURRENT_JOBSHEET:
      return {
        ...state,
        currentJobsheet: action.payload
      };
    default:
      return state;
  }
};

export default dashboardReducer;
