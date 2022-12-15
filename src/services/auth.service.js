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
        localStorage.setItem("username", JSON.stringify(username));
        getUserId(username);
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("username");
  localStorage.removeItem("userId")
};

const getUserId = (username) => {
  return axios
    .get(API_URL_REGISTER + "/username")
    .then(function (response){
      localStorage.setItem("userId", JSON.stringify(response.data))
      console.log(response)
      return response.data
    });
};

export default {
  register,
  login,
  logout,
  getUserId,
};