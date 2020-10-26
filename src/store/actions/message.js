import * as actionTypes from "./actionTypes";
import { genMessages } from "../../utils/genLoremIpsum";

export const loadMessages = () => {
  return async (dispatch) => {
    const messages = await genMessages();
    dispatch(setMessage(messages));
  };
};

export const setMessage = (items) => {
  return {
    type: actionTypes.SET_MESSAGE,
    items,
  };
};

export const selectedMessage = (selectedId) => {
  return {
    type: actionTypes.SELECTED_MESSAGE,
    selectedId,
  };
};
