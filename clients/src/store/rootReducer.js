import { combineReducers } from "redux";
import modalSlice from "./modal/modaSlice";
import userSlice from "./fetchApiUsers/userSlice";
import valueSlice from "./modal/valueModal/valueSlice";
import allCodeSlice from "./fetchApiAllCode/allCodeSlice";
import roleSlice from "./fetchApiAllCode/roleSlice";
import positionSlice from "./fetchApiAllCode/positionSlice";
import languageSlice from "./languages/languageSlice";
import loginSlice from "./FetchApiLogin/loginSlice";
import doctorsSlice from "./fetchApiDoctor/doctorSlice";

const rootReducer = combineReducers({
  modal: modalSlice,
  user: userSlice,
  value: valueSlice,
  gender: allCodeSlice,
  role: roleSlice,
  position: positionSlice,
  language: languageSlice,
  loginUser: loginSlice,
  doctor: doctorsSlice,
});

export default rootReducer;
