import { LANGUAGE_EN_VN } from "./contants";
export const initState = {
  languages: "vn",
};

const languageSlice = (state = initState, action) => {
  console.log("sate", state);
  console.log("action", action);
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
  console.log("newState", newState);
  return newState;
};

export default languageSlice;
