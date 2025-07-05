import axios from 'axios';
import { getSessionToken, removeSessionAndLogoutUser } from './authentication';

// Use environment variable directly
const API_BASE_URL = process.env.API_BASE_URL || 'https://hotel-room-booking-system-j0rb.onrender.com';

const ApiService = axios.create({
  baseURL: API_BASE_URL
});

// Add request interceptor for authentication
ApiService.interceptors.request.use(
  (config) => {
    const token = getSessionToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for handling auth errors
ApiService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeSessionAndLogoutUser();
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  }
);

export default ApiService;
