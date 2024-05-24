import { LANGUAGE_EN_VN } from "./contants";

export const initState = {
  languages: "vn",
};

const languageSlice = (state = initState, action) => {
  switch (action.type) {
    case LANGUAGE_EN_VN:
      return {
        languages: action.payload,
      };

    default:
      return state;
  }
};

export default languageSlice;
