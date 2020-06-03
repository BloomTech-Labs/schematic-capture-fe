import { actions } from "../actions/dashboardActions";

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
  UPDATE_COMPONENT
} = actions;

const initState = {
  clients: [],
  techs: [],
  currentProjects: [],
  currentClient: null,
  currentProject: null,
  currentJobsheets: [],
  currentJobsheet: null,
  edit: false,
  currentComponent: null,
  components: []
};

const dashboardReducer = (state = initState, action) => {

  // console.log(state, ' is state in reducer')

  switch (action.type) {
    case SET_AVAILABLE_TECHS:
      console.log(action.payload, ' action.payload in SET_AVAILABLE_TECHS')
      return {
        ...state,
        techs: action.payload
      };
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload
      };
      case SET_ASSIGNED_PROJECTS:
      return {
        ...state,
        currentProject: action.payload
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
    case UPDATE_CURRENT_PROJECT_NAME:
      console.log("update current project");
      console.log(action.payload);
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          name: action.payload
        }
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
      case TOGGLE_COMPONENT_EDIT:
      return {
        ...state,
        editing: action.payload
      };
      case FETCH_COMPONENTS_SUCCESS:
        console.log(action.payload, "FETCH_COMPONENTS_SUCCESS!!!")
      return {
        ...state,
        components: action.payload
      };
      case UPDATE_COMPONENT:
      return {
        ...state,
        components: state.components.map(component => {
                    if(component.id === action.payload.id) {
                      return action.payload;
                    }
                    return component;
        })
      };
    default:
      return state;
  }
};

export default dashboardReducer;
