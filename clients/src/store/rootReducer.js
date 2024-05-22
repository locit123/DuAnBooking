import { combineReducers } from "redux";
import modalSlice from "./modal/modaSlice";
import userSlice from "./fetchApiUsers/userSlice";

const rootReducer = combineReducers({
  modal: modalSlice,
  user: userSlice,
});

export default rootReducer;
