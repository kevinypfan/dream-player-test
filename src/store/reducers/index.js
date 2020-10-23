import { combineReducers } from "redux";
import appReducer from "./app";
import messageReducer from "./message";

const rootReducer = combineReducers({
  app: appReducer,
  message: messageReducer,
});

export default rootReducer;
