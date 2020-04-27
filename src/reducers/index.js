import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedRecucer from "./isLogged";

const rootReducers = combineReducers({
  counter: counterReducer,
  logged: loggedRecucer,
});

export default rootReducers;
