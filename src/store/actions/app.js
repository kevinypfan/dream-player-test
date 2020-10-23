import * as actionTypes from "./actionTypes";

export const toggleDrawer = (open) => {
  return {
    type: actionTypes.TOGGLE_DRAWER,
    open,
  };
};
