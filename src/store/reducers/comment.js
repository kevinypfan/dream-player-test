import { updateObject } from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const initState = { items: [] };

const setComment = (state, action) => {
  return updateObject(state, { items: action.items });
};

const addComment = (state, action) => {
  return updateObject(state, { items: action.items.concat(action.comment) });
};

const deleteComment = (state, { commentId }) => {
  const items = state.items.filter((item) => item.id !== commentId);
  return updateObject(state, { items });
};

const replyComment = (state, { commentId, reply }) => {
  const item = state.items.find((item) => item.id === commentId);
  item.replies = item.reply.concat(reply);
  return updateObject(state, state.items);
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMMENT:
      return setComment(state, action);
    case actionTypes.ADD_COMMENT:
      return addComment(state, action);
    case actionTypes.DELETE_COMMENT:
      return deleteComment(state, action);
    case actionTypes.REPLY_COMMENT:
      return replyComment(state, action);
    default:
      return state;
  }
};

export default reducer;
