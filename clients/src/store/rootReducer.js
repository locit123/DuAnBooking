import { combineReducers } from "redux";
import modalSlice from "./modal/modaSlice";
import userSlice from "./fetchApiUsers/userSlice";
import valueSlice from "./modal/valueModal/valueSlice";

const rootReducer = combineReducers({
  modal: modalSlice,
  user: userSlice,
  value: valueSlice,
});

export default rootReducer;
