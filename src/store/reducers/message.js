import { updateObject } from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const initState = { items: [], selectedId: null };

const loadMessages = (state, action) => {
  return updateObject(state, { items: action.items });
};

const selectedMessage = (state, action) => {
  return updateObject(state, { selectedId: action.selectedId });
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MESSAGES:
      return loadMessages(state, action);
    case actionTypes.SELECTED_MESSAGE:
      return selectedMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
