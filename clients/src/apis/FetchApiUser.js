import axios from "axios";

export const getUser = (payload) =>
  axios.get(`http://localhost:8080/api/get-all-user/${payload}`);

export const postUser = (payload) =>
  axios.post("http://localhost:8080/api/create-user", payload);

export const putUser = (id, payload) =>
  axios.put(`http://localhost:8080/api/put-user/${id}`, payload);

export const deleteUser = (id) =>
  axios.delete(`http://localhost:8080/api/delete-user/${id}`);
