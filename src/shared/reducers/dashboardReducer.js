import { actions } from "../actions/dashboardActions";

const { FETCH_CLIENTS_SUCCESS } = actions;

const initState = {
  clients: []
};

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload
      };
    default:
      return state;
  }
};

export default dashboardReducer;
