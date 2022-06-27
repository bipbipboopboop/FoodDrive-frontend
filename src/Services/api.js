import axios from "axios";
import { getAccessToken } from "./auth.services";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = "JWT " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
