import * as actionTypes from "./actionTypes";
import { genMessages } from "../../utils/genLoremIpsum";

export const loadMessages = () => {
  return {
    type: actionTypes.LOAD_MESSAGES,
    items: genMessages(),
  };
};

export const selectedMessage = (selectedIndex) => {
  return {
    type: actionTypes.SELECTED_MESSAGE,
    selectedIndex,
  };
};
