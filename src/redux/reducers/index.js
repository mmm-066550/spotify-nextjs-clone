import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tokenReducer from "./tokenReducer";

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
});
