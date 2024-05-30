import axios from "axios";

export const getDoctor = (payload) =>
  axios.get(`http://localhost:8080/apiDoctor/get-doctor?limit=${payload}`);
