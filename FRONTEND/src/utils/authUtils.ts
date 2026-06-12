const USER_KEY = "user";

export const isLoggedIn = () => {
  return localStorage.getItem(USER_KEY) === "logged";
};

export const login = () => {
  localStorage.setItem(USER_KEY, "logged");
};

export const logout = () => {
  localStorage.removeItem(USER_KEY);
};