import { createActions } from "redux-actions";

export const typeActionDoctor = (action) => {
  return action().type;
};

export const getTypeActionDoctor = createActions({
  getDoctorRequest: (payload) => payload,
  getDoctorSuccess: (payload) => payload,
  getDoctorFailed: (payload) => payload,
});
