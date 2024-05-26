import { getType, getTypeLoginFetch } from "./actions";

export const initState = {
  isLoading: false,
  isError: false,
  login: {},
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
