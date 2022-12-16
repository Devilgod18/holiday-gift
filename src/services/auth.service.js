import axios from "axios";
import authHeader from "./auth-header";

const API_URL_REGISTER = "http://54.157.103.186:8080/user";
const API_URL_FINDUSR = "http://54.157.103.186:8080/finduser/username?username=user4";
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
        console.log("Saved JWT to local storage");
        localStorage.setItem("username", JSON.stringify(username));
        console.log("Saved Username to local storage");
        console.log("Attempting getUserId");
        //localStorage.setItem("id", getUserId(username).data.id);
        console.log("Attempted getUserId");
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("username");
  localStorage.removeItem("id")
};

const getUserId = async (username) => {
  console.log("Start of getUserId");
  try {
    const response = await
  axios
    .get(API_URL_FINDUSR, {
      headers: authHeader //Put in tokens
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default {
  register,
  login,
  logout,
  getUserId,
};