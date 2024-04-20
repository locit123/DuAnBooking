import axios from "axios";
let baseUrl = "http://localhost:8080/api/";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
