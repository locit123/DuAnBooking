import AxiosInstall from "../AxiosInstall";
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
export { userLoginService, getAllUsersService };
