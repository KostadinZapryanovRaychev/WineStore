import { postFetch } from "../utils/fetch";

export const loginUser = async (formData, fn) => {
  try {
    const response = await postFetch("/users/login", formData);
    const token = response.token;
    if (token) {
      fn(true);
    }
    sessionStorage.setItem("authToken", token);
    return token;
  } catch (error) {
    throw new Error("Error during user login");
  }
};

export const registerUser = async (userData) => {
  return await postFetch("/users/register", userData);
};

export const logout = async () => {
  sessionStorage.removeItem("authToken");
};
