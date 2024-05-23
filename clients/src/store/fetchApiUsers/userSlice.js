import {
  deleteTypeFetch,
  getType,
  getTypeFetch,
  postTypeFetch,
  putTypeFetch,
} from "../saga/actions";

export const initState = {
  isLoading: false,
  isError: false,
  users: [],
};

const userSlice = (state = initState, action) => {
  console.log("state", state);
  console.log("action", action);
  let newState;
  switch (action.type) {
    case getType(getTypeFetch.getRequest):
      newState = {
        ...state,
        isLoading: true,
        isError: false,
      };
      break;
    case getType(getTypeFetch.getSuccess):
      newState = {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload,
      };
      break;
    case getType(getTypeFetch.getFailed):
      newState = {
        ...state,
        isLoading: false,
        isError: true,
      };
      break;
    //-------POST------------
    case getType(postTypeFetch.postRequest):
      newState = {
        ...state,
        isLoading: true,
        isError: false,
      };
      break;
    case getType(postTypeFetch.postSuccess):
      newState = {
        ...state,
        isError: false,
        users: [...state.users, action.payload],
      };
      break;
    case getType(postTypeFetch.postFailed):
      newState = {
        ...state,
        isLoading: false,
        isError: true,
      };
      break;
    //-------PUT------------
    case getType(putTypeFetch.putRequest):
      newState = {
        ...state,
        isLoading: true,
        isError: false,
      };
      break;
    case getType(putTypeFetch.putSuccess):
      newState = {
        ...state,
        isError: false,
      };
      break;
    case getType(putTypeFetch.putFailed):
      newState = {
        ...state,
        isLoading: false,
        isError: true,
      };
      break;
    //-------DELETE------------
    case getType(deleteTypeFetch.deleteRequest):
      newState = {
        ...state,
        isLoading: true,
        isError: false,
      };
      break;
    case getType(deleteTypeFetch.deleteSuccess):
      newState = {
        ...state,
        isError: false,
      };
      break;
    case getType(deleteTypeFetch.deleteFailed):
      newState = {
        ...state,
        isLoading: false,
        isError: true,
      };
      break;

    default:
      return state;
  }
  console.log("newState", newState);
  return newState;
};

export default userSlice;
