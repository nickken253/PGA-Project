import Axios, { AxiosRequestConfig } from "axios";

import { API_URL } from "../config";
import { useNotificationStore } from "../stores/notifications";
import storage from "../utils/storage";

export const axios = Axios.create({
  baseURL: API_URL,
});

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = storage.get("token");
  return config;
}
axios.interceptors.request.use(function (config) {
    const token = storage.get("token");
    if (token) {
      config.headers.Authorization = `${token}`
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
axios.interceptors.response.use(
  (response) => {    
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    useNotificationStore.getState().addNotification({
      type: "error",
      title: "Error",
      message,
    });

    return Promise.reject(error);
  }
);
