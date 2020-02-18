import authReducer from "./authReducer";
import appReducer from "./appReducer";
import dashboardReducer from "./dashboardReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  dashboard: dashboardReducer
});

export default rootReducer;

// the key name will be the data property on the state object
