import { HIDE_MODAL, SHOW_MODAL } from "./contants";

export const initState = {
  isShow: false,
};

const modalSlice = (state = initState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isShow: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isShow: false,
      };

    default:
      return state;
  }
};

export default modalSlice;
