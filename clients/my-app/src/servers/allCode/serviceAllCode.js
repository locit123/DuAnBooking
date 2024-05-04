import axios from "axios";

const getAllCodeService = (type) => {
  return axios.get(`http://localhost:8080/allCode?type=${type}`);
};

export { getAllCodeService };
