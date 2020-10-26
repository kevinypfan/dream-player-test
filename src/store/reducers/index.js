import { combineReducers } from "redux";
import appReducer from "./app";
import messageReducer from "./message";
import commentReducer from "./comment";

const rootReducer = combineReducers({
  app: appReducer,
  message: messageReducer,
  comment: commentReducer,
});

export default rootReducer;
