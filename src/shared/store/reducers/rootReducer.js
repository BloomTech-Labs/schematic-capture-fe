import authReducer from "./authReducer";
import appReducer from "./appReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer
});

export default rootReducer;

// the key name will be the data property on the state object
