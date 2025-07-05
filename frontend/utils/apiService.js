import axios from 'axios';
import { getSessionToken, removeSessionAndLogoutUser } from './authentication.js';

// ✅ Use environment variable instead of getConfig
const API_BASE_URL = process.env.API_BASE_URL || 'https://hotel-room-booking-system-j0rb.onrender.com';

const ApiService = axios.create({
  baseURL: API_BASE_URL,  // ✅ Fixed: Use the environment variable
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
ApiService.interceptors.request.use(
  (config) => {
    const token = getSessionToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
ApiService.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      removeSessionAndLogoutUser();
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);