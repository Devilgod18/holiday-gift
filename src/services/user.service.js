import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "54.157.103.186:8080/api/hello";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
};