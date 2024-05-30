import { createActions, createAction } from "redux-actions";
import { LOGOUT_USER } from "./contants";

export const getType = (actionType) => {
  return actionType().type;
};

export const getTypeLoginFetch = createActions({
  postLoginRequest: (payload) => payload,
  postLoginSuccess: (payload) => payload,
  postLoginFailed: (payload) => payload,
});

export const setLogOut = createAction(LOGOUT_USER, (payload) => payload);
