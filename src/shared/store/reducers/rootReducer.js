import authReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer

// the key name will be the data property on the state object