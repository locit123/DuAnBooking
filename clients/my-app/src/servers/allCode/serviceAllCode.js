import axios from "axios";

const getAllCodeService = (type) => {
  return axios.get(`http://localhost:8080/allCode?type=${type}`);
};

const createNewUserService = (
  email,
  password,
  firstName,
  lastName,
  address,
  gender,
  roleId,
  phoneNumber,
  position,
  image
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
    positionId: position,
    image: image,
  });
};

export { getAllCodeService, createNewUserService };
