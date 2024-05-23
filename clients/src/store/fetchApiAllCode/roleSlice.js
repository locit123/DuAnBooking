import { getType, getTypeFetchAllCode2 } from "../saga/actions";

export const initState = {
  isLoading: false,
  isError: false,
  roles: [],
};

const roleSlice = (state = initState, action) => {
  switch (action.type) {
    case getType(getTypeFetchAllCode2.getRoleRequest):
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case getType(getTypeFetchAllCode2.getRoleSuccess):
      return {
        ...state,
        isLoading: false,
        isError: false,
        roles: action.payload,
      };
    case getType(getTypeFetchAllCode2.getRoleFailed):
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export default roleSlice;
