import { jwtDecode } from "jwt-decode";

export const getUser = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    return jwtDecode(token); // gives name, email, userId
  } catch (err) {
    return null;
  }
};