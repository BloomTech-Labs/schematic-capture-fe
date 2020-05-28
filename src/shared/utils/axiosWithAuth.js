import axios from "axios";

export const axiosWithAuth = () => {
  const idToken = localStorage.getItem("idToken");
  const BASE_URL =
    process.env.REACT_APP_BASE_URL ||
    "http://localhost:5435/api";

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

// https://schematic-capture.herokuapp.com/api/
// https://schematiccapture-master.herokuapp.com/api