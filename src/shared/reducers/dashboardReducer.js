import { actions } from "../actions/dashboardActions";
// import state from "sweetalert/typings/modules/state";

const {
  FETCH_CLIENTS_SUCCESS,
  SET_AVAILABLE_TECHS,
  SET_ASSIGNED_PROJECTS,
  SET_CURRENT_CLIENT,
  SET_CURRENT_PROJECTS,
  SET_CURRENT_PROJECT,
  SET_CURRENT_JOBSHEETS,
  SET_CURRENT_JOBSHEET,
  UPDATE_CURRENT_PROJECT_NAME,
  FETCH_COMPONENTS_SUCCESS,
  TOGGLE_COMPONENT_EDIT,
  UPDATE_COMPONENT,
  FETCH_ACTIVITIES,
  ASSIGN_TECH_PROJECT,
  ADD_PROJECT
} = actions;

const initState = {
  clients: [],
  techs: [],
  currentProjects: [],
  currentClient: null,
  currentProject: null,
  currentJobsheets: [],
  currentJobsheet: {},
  edit: false,
  currentComponent: null,
  components: [],
  activities: []
};

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload,
      };
    case SET_AVAILABLE_TECHS:
      return {
        ...state,
        techs: action.payload,
      };
    case SET_ASSIGNED_PROJECTS:
      return {
        ...state,
        currentProject: action.payload,
      };
    case SET_CURRENT_CLIENT:
      return {
        ...state,
        currentClient: action.payload,
      };
    case SET_CURRENT_PROJECTS:
      return {
        ...state,
        currentProjects: action.payload,
      };
    case SET_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: action.payload,
      };
    case UPDATE_CURRENT_PROJECT_NAME:
      console.log("update current project");
      console.log(action.payload);
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          name: action.payload,
        },
      };
    case SET_CURRENT_JOBSHEETS:
      return {
        ...state,
        currentJobsheets: action.payload,
      };
    case SET_CURRENT_JOBSHEET:
      return {
        ...state,
        currentJobsheet: action.payload,
      };
    case TOGGLE_COMPONENT_EDIT:
      return {
        ...state,
        editing: action.payload,
      };
    case FETCH_COMPONENTS_SUCCESS:
      console.log(action.payload, "FETCH_COMPONENTS_SUCCESS!!!");
      return {
        ...state,
        components: action.payload,
      };
    case UPDATE_COMPONENT:
      return {
        ...state,
        components: state.components.map((component) => {
          if (component.id === action.payload.id) {
            return action.payload;
          }
          return component;
        }),
      };
    case ASSIGN_TECH_PROJECT:
      return {
        ...state,
        techs: [...state.techs, action.payload],
      };
    case ADD_PROJECT:
      console.log("add project", action.payload)
      return {
        ...state,
        currentProjects: [...state.currentProjects, action.payload]
      }
    case FETCH_ACTIVITIES:
      console.log(action.payload, "FETCH_ACTIVITIES!!!");
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
