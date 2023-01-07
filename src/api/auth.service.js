const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("id");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  logout,
  getCurrentUser,
};

export default authService;
