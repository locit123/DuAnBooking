import { getType, getTypeFetch } from "../saga/actions";

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

    default:
      return state;
  }
  console.log("newState", newState);
  return newState;
};

export default userSlice;
