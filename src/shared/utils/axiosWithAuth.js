import axios from "axios";

export const axiosWithAuth = () => {
  const idToken = localStorage.getItem("idToken");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${idToken}`
    }
  });
};
