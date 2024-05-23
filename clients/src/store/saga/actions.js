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

//POST USER
export const postTypeFetch = createActions({
  postRequest: (payload) => payload,
  postSuccess: (payload) => payload,
  postFailed: (payload) => payload,
});
//PUT USER
export const putTypeFetch = createActions({
  putRequest: (id, payload) => {
    return {
      id,
      payload,
    };
  },
  putSuccess: (payload) => payload,
  putFailed: (payload) => payload,
});
//DELETE USER
export const deleteTypeFetch = createActions({
  deleteRequest: (id) => id,
  deleteSuccess: (payload) => payload,
  deleteFailed: (payload) => payload,
});

//------------FETCH-API-ALLCODE------------
export const getTypeFetchAllCode1 = createActions({
  getAllCodeRequest: (payload) => payload,
  getAllCodeSuccess: (payload) => payload,
  getAllCodeFailed: (payload) => payload,
});
export const getTypeFetchAllCode2 = createActions({
  getRoleRequest: (payload) => payload,
  getRoleSuccess: (payload) => payload,
  getRoleFailed: (payload) => payload,
});

export const getTypeFetchAllCode3 = createActions({
  getPositionRequest: (payload) => payload,
  getPositionSuccess: (payload) => payload,
  getPositionFailed: (payload) => payload,
});
