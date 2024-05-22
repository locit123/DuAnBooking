import { createActions } from "redux-actions";

export const getType = (actionType) => {
  return actionType().type;
};

//CALL API GET USERS
export const getTypeFetch = createActions({
  getRequest: (payload) => payload,
  getSuccess: (payload) => payload,
  getFailed: (payload) => payload,
});
