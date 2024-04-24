import axios from "axios";
const userLoginService = (email, password) => {
  return axios.post("http://localhost:8080/api/login-user", {
    email: email,
    password: password,
  });
};

const getAllUsersService = (id) => {
  return axios.get(`http://localhost:8080/api/get-all-user/${id}`);
};

const createNewUser = (
  email,
  password,
  firstName,
  lastName,
  address,
  gender,
  roleId,
  phoneNumber
) => {
  return axios.post("http://localhost:8080/api/create-user", {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    address: address,
    gender: gender,
    roleId: roleId,
    phoneNumber: phoneNumber,
  });
};
const deleteUserService = (id) => {
  return axios.delete(`http://localhost:8080/api/delete-user/${id}`);
};
const putUserService = (id, firstName, lastName, address) => {
  return axios.put(`http://localhost:8080/api/put-user/${id}`, {
    firstName: firstName,
    lastName: lastName,
    address: address,
  });
};
export {
  userLoginService,
  getAllUsersService,
  createNewUser,
  deleteUserService,
  putUserService,
};
