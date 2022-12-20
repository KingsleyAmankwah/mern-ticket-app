import axios from "axios";

const BACKEND_URL = "http://localhost:5000";
export const API_URL = `${BACKEND_URL}/api/users/`;

//Regsiter User
const registerUser = async (userData) => {
  const response = await axios.post(API_URL, userData);

  return response.data;
};

//Login User
const loginUser = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  return response.data;
};

//Logout User
const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};

const authService = {
  registerUser,
  loginUser,
  logout,
};

export default authService;
