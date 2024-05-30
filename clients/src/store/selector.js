export const userDataState = (state) => state.user.users;
export const isLoadingState = (state) => state.user.isLoading;
export const isErrorState = (state) => state.user.isError;
export const modalState = (state) => state.modal.isShow;
//--------------------VALUE--------------------
export const emailState = (state) => state.value.email;
export const passwordState = (state) => state.value.password;
export const firstNameState = (state) => state.value.firstName;
export const lastNameState = (state) => state.value.lastName;
export const addressState = (state) => state.value.address;
export const genderState = (state) => state.value.gender;
export const roleState = (state) => state.value.role;
export const phoneNumberState = (state) => state.value.phoneNumber;
export const positionState = (state) => state.value.position;
export const imageState = (state) => state.value.image;
export const statusState = (state) => state.value.status;
//--------------------GENDER--------------------
export const genderIsLoadingState = (state) => state.gender.isLoading;
export const genderIsErrorState = (state) => state.gender.isError;
export const genderDataState = (state) => state.gender.genders;
//--------------------Role--------------------
export const roleIsLoadingState = (state) => state.role.isLoading;
export const roleIsErrorState = (state) => state.role.isError;
export const roleDataState = (state) => state.role.roles;
//--------------------POSITION--------------------
export const positionIsLoadingState = (state) => state.position.isLoading;
export const positionIsErrorState = (state) => state.position.isError;
export const positionDataState = (state) => state.position.positions;
//-------------------LANGUAGE----------------------
export const getLanguageState = (state) => state.language.languages;
//-------------------LOGIN-USER--------------------
export const getDataLoginState = (state) => state.loginUser.login;
export const getIsLoadingLoginState = (state) => state.loginUser.isLoading;
export const getIsErrorLoginState = (state) => state.loginUser.isError;
//-------------------DOCTOR--------------------
export const getDoctorState = (state) => state.doctor.doctors;
export const isLoadingDoctorState = (state) => state.doctor.isLoading;
export const isErrorDoctorState = (state) => state.doctor.isError;
