import { getType, getTypeFetchAllCode1 } from "../saga/actions";

export const initState = {
  isLoading: false,
  isError: false,
  genders: [],
};

const allCodeSlice = (state = initState, action) => {
  switch (action.type) {
    case getType(getTypeFetchAllCode1.getAllCodeRequest):
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case getType(getTypeFetchAllCode1.getAllCodeSuccess):
      return {
        ...state,
        isLoading: false,
        isError: false,
        genders: action.payload,
      };
    case getType(getTypeFetchAllCode1.getAllCodeFailed):
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export default allCodeSlice;
