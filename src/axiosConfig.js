import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const axiosInstance = axios.create({
  baseURL: 'http://94.20.82.6:8080/api', 
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/Auth/Login', { email, password });
    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
      const userInfo = { 
        name: response.data.name || '', 
        surname: response.data.surname || '', 
        userRole: response.data.userRole 
      };
      localStorage.setItem("user", JSON.stringify(userInfo));
      return true; 
    }
    return false;
  } catch (error) {
    const errorMessage = error.response?.data.message || "Login failed. Please try again.";
    toast.error(errorMessage);
    return false; 
  }
};

export default axiosInstance;
