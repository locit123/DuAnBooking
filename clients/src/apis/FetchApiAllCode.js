import axios from "axios";

export const getAllCode = (query) =>
  axios.get(`http://localhost:8080/allCode?type=${query}`);
