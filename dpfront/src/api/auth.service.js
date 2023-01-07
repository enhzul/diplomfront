import axios from "axios";

const API_URL = "/auth";

const logout = () => {
  localStorage.removeItem("users");
  localStorage.removeItem("id");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("users"));
};

const authService = {
  logout,
  getCurrentUser,
};

export default authService;
