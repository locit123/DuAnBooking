import { HIDE_MODAL, SHOW_MODAL } from "./contants";

export const initState = {
  isShow: false,
};

const modalSlice = (state = initState, action) => {
  let newState;
  switch (action.type) {
    case SHOW_MODAL:
      newState = {
        ...state,
        isShow: true,
      };
      break;
    case HIDE_MODAL:
      newState = {
        ...state,
        isShow: false,
      };
      break;

    default:
      return state;
  }
  return newState;
};

export default modalSlice;
