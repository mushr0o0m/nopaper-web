import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL = 'https://dev-store.nebumaga.com'

const $api = axios.create({
  baseURL: API_URL
})

$api.interceptors.request.use((config) => {
  if (localStorage.getItem('access'))
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
  else
    config.headers['X-Account-Id'] = `${localStorage.getItem('userId')}`;
  return config;
})

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(error)
    if (error.response.status === 401 && error.config && !originalRequest.isRetry) {
      originalRequest.isRetry = true;
      try {
        const refreshToken = localStorage.getItem('refresh');
        const response =
          await axios.post<Pick<AuthResponse, 'access' | 'accessExpires'>>(`${API_URL}/api/auth/login/`,
            {
              refreshToken
            });
        localStorage.setItem('access', response.data.access);
        return $api.request(originalRequest);
      } catch (error) {
        console.log('Unauthorized!!!');
      }
    }
    throw error;
  })

export default $api;

