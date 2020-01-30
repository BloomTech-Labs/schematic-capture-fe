import axios from "axios";

export const axiosWithAuth = () => {
    const token = sessionStorage.getItem("token");
    const BASE_URL = process.env.BASE_URL;

    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
