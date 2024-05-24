import { getType, getTypeLoginFetch } from "./actions";

const getUserLocalStore = () => {
  let user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  return JSON.parse(user);
};

export const initState = {
  isLoading: false,
  isError: false,
  login: getUserLocalStore() ? getUserLocalStore() : {},
};

const loginSlice = (state = initState, action) => {
  switch (action.type) {
    case getType(getTypeLoginFetch.postLoginRequest):
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case getType(getTypeLoginFetch.postLoginSuccess):
      return {
        ...state,
        isLoading: false,
        isError: false,
        login: action.payload,
      };
    case getType(getTypeLoginFetch.postLoginFailed):
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default loginSlice;
