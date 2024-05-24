import { createAction } from "redux-actions";
import { LANGUAGE_EN_VN } from "./contants";

export const setLanguage = createAction(LANGUAGE_EN_VN, (payload) => payload);
