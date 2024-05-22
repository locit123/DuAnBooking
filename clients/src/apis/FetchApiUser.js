import axios from "axios";

export const getUser = (payload) =>
  axios.get(`http://localhost:8080/api/get-all-user/${payload}`);
