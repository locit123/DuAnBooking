import { createActions } from "redux-actions";

export const typeAction = (typeReducer) => {
  return typeReducer().type;
};

const typeValue = createActions({
  setEmail: (payload) => payload,
  setPassword: (payload) => payload,
  setFirstName: (payload) => payload,
  setLastName: (payload) => payload,
  setAddress: (payload) => payload,
  setGender: (payload) => payload,
  setRole: (payload) => payload,
  setPhoneNumber: (payload) => payload,
  setImage: (payload) => payload,
  setStatus: (payload) => payload,
});

export default typeValue;
