import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://www.balldontlie.io';

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response?.data || response,
  (error) => Promise.reject(error),
);

export default axiosInstance;
