import axios from "axios";

export const postLogin = (payload) =>
  axios.post(`http://localhost:8080/api/login-user`, payload);
