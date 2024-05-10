import axios from 'axios';
import { REACT_APP_API_BASE_URL } from 'config/index';

// Create Axios instance
const apiInstance = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  timeout: 10000, // milliseconds
});

// Add request interceptor
apiInstance.interceptors.request.use(
  (config) => {
  
    return config;
  },
  (error) => {
    
    return Promise.reject(error);
  }
);

// Add response interceptor
apiInstance.interceptors.response.use(
  (response) => {
   
    return response;
  },
  (error) => {
   
    return Promise.reject(error);
  }
);

export default apiInstance;
