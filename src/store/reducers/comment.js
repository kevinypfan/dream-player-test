import { updateObject } from "../../shared/utility";
import * as actionTypes from "../actions/actionTypes";

const initState = { items: [], selectedReplyId: null, selectedDeleteId: null };

const setComment = (state, action) => {
  return updateObject(state, { items: action.items });
};

const addComment = (state, action) => {
  return updateObject(state, { items: state.items.concat(action.comment) });
};

const deleteComment = (state, { commentId }) => {
  const items = state.items.filter((item) => item.id !== commentId);
  return updateObject(state, { items });
};

const replyComment = (state, { commentId, reply }) => {
  const items = state.items.map((item) => {
    if (item.id === commentId) {
      item.replies = item.replies.concat(reply);
    }
    return item;
  });

  return updateObject(state, { items });
};

const setSelectedReplyId = (state, { commentId }) => {
  return updateObject(state, { selectedReplyId: commentId });
};

const setSelectedDeleteId = (state, { commentId }) => {
  return updateObject(state, { selectedDeleteId: commentId });
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
    case actionTypes.SET_SELECTED_REPLY_ID:
      return setSelectedReplyId(state, action);
    case actionTypes.SET_SELECTED_DELETE_ID:
      return setSelectedDeleteId(state, action);
    default:
      return state;
  }
};

export default reducer;
