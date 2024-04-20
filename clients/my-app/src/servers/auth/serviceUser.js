import AxiosInstall from "../AxiosInstall";
import axios from "axios";
const userLoginService = async (email, password) => {
  return await axios.post("http://localhost:8080/api/login-user", {
    email: email,
    password: password,
  });
};

export { userLoginService };
