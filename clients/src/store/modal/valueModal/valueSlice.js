import typeValue, { typeAction } from "./actions";

export const initState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  address: "",
  gender: "M",
  role: "R3",
  phoneNumber: "",
  position: "P0",
  image: "",
  status: ["create"],
};

const valueSlice = (state = initState, action) => {
  switch (action.type) {
    case typeAction(typeValue.setEmail):
      return {
        ...state,
        email: action.payload,
      };
    case typeAction(typeValue.setPassword):
      return {
        ...state,
        password: action.payload,
      };
    case typeAction(typeValue.setFirstName):
      return {
        ...state,
        firstName: action.payload,
      };
    case typeAction(typeValue.setLastName):
      return {
        ...state,
        lastName: action.payload,
      };
    case typeAction(typeValue.setAddress):
      return {
        ...state,
        address: action.payload,
      };
    case typeAction(typeValue.setGender):
      return {
        ...state,
        gender: action.payload,
      };
    case typeAction(typeValue.setRole):
      return {
        ...state,
        role: action.payload,
      };
    case typeAction(typeValue.setPhoneNumber):
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case typeAction(typeValue.setPosition):
      return {
        ...state,
        position: action.payload,
      };
    case typeAction(typeValue.setImage):
      return {
        ...state,
        image: action.payload,
      };
    case typeAction(typeValue.setStatus):
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default valueSlice;
