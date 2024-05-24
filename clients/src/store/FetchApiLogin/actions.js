import { createActions } from "redux-actions";

export const getType = (actionType) => {
  return actionType().type;
};

export const getTypeLoginFetch = createActions({
  postLoginRequest: (payload) => payload,
  postLoginSuccess: (payload) => payload,
  postLoginFailed: (payload) => payload,
});
