// apiMiddleware.js
import axios from 'axios';
import { setLoading } from 'store/features/loaderSlice';
import { message } from 'antd';
import { CODE } from 'constants/CommonConstants';
import { REACT_APP_API_BASE_URL } from 'config/index';
import store from "store/index";



// Create Axios instance
const apiInstance = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  timeout: 10000, // milliseconds
});

// Add request interceptor
apiInstance.interceptors.request.use(
  (config) => {
    store.dispatch(setLoading(true)); // Dispatch action to show loader
    return config;
  },
  (error) => {
    store.dispatch(setLoading(false)); // Dispatch action to hide loader
    return Promise.reject(error);
  }
);

// Add response interceptor
apiInstance.interceptors.response.use(
  (response) => {
    store.dispatch(setLoading(false)); // Dispatch action to hide loader
    if (response && response.status >= CODE.BAD_REQUEST_CODE && response.status < CODE.INTERNAL_SERVER_ERROR) {
      // Log out the user if the response status is in the range 400-499
      message.error("Unauthorized")
      return Promise.reject("Unauthorized");
    }
    return response;
  },
  (error) => {
    store.dispatch(setLoading(false)); // Dispatch action to hide loader
    return Promise.reject(error);
  }
);

export default apiInstance;
