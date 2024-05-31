import { LANGUAGE_EN_VN } from "./contants";
export const initState = {
  languages: "vn",
};

const languageSlice = (state = initState, action) => {
  let newState;
  switch (action.type) {
    case LANGUAGE_EN_VN:
      newState = {
        ...state,
        languages: action.payload,
      };
      break;
    default:
      return state;
  }
  return newState;
};

export default languageSlice;
