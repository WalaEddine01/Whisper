import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
  // withCredentials: true, // Send cookies with the request
});

export default axiosInstance;

