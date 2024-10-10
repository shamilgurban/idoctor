import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', 
});

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
