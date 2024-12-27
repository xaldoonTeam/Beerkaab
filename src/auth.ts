// src/auth.ts
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Adjust based on your backend URL

export const signIn = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/signin`, { email, password });
  return response.data;
};

export const signOut = async () => {
  await axios.post(`${API_URL}/signout`);
};