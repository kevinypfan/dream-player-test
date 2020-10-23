import { updateObject } from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const initState = { sideDrawer: false };

const toggleDrawer = (state, action) => {
  return updateObject(state, { sideDrawer: action.open });
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DRAWER:
      return toggleDrawer(state, action);
    default:
      return state;
  }
};

export default reducer;
