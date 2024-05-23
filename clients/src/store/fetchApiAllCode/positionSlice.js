import { getType, getTypeFetchAllCode3 } from "../saga/actions";

export const initState = {
  isLoading: false,
  isError: false,
  positions: [],
};

const positionSlice = (state = initState, action) => {
  switch (action.type) {
    case getType(getTypeFetchAllCode3.getPositionRequest):
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case getType(getTypeFetchAllCode3.getPositionSuccess):
      return {
        ...state,
        isLoading: false,
        isError: false,
        positions: action.payload,
      };
    case getType(getTypeFetchAllCode3.getPositionFailed):
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export default positionSlice;
