import { createAction } from "redux-actions";
import { HIDE_MODAL, SHOW_MODAL } from "./contants";

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
