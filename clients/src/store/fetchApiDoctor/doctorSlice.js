import { getTypeActionDoctor, typeActionDoctor } from "./actions";

export const initState = {
  isLoading: false,
  isError: false,
  doctors: [],
};

const doctorsSlice = (state = initState, action) => {
  switch (action.type) {
    case typeActionDoctor(getTypeActionDoctor.getDoctorRequest):
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case typeActionDoctor(getTypeActionDoctor.getDoctorSuccess):
      return {
        ...state,
        isLoading: false,
        isError: false,
        doctors: action.payload,
      };
    case typeActionDoctor(getTypeActionDoctor.getDoctorFailed):
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export default doctorsSlice;
