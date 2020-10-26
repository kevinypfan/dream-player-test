import * as actionTypes from "./actionTypes";
import { genComments } from "../../utils/genLoremIpsum";

export const loadComments = () => {
  return async (dispatch) => {
    const comments = await genComments();
    dispatch(setComment(comments));
  };
};

export const setComment = (items) => {
  return {
    type: actionTypes.SET_COMMENT,
    items,
  };
};

export const deleteComment = (commentId) => {
  return {
    type: actionTypes.DELETE_COMMENT,
    commentId,
  };
};

export const replyComment = (commentId, reply) => {
  return {
    type: actionTypes.REPLY_COMMENT,
    commentId,
    reply,
  };
};
