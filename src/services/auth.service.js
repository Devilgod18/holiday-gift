import axios from "axios";

const API_URL_REGISTER = "http://54.157.103.186:8080/user";
const API_URL_LOGIN = "http://54.157.103.186:8080/authenticate";

const register = (username, email, password, role, enabled) => {
  return axios.post(API_URL_REGISTER, {
    username,
    email,
    password,
    role,
    enabled
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL_LOGIN, { username: username, password: password })
      .then((response) => {
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};