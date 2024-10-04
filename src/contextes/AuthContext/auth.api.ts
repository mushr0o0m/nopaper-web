import axios, { AxiosResponse } from 'axios';
import config from '../../config'
import $api from '../../services/http';
import { AuthResponse, GuestResponse, IUser } from './auth.types';

const loginUser = async (email: string): Promise<AxiosResponse<Pick<IUser, 'id'>>> => {
  return axios.post<Pick<IUser, 'id'>>(`${config.API_URL}/api/auth/login/`, { email });
};

const confirmUser = async (email: string, otp: string): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post<AuthResponse>(`${config.API_URL}/api/auth/confirm/`, {
    email,
    otp
  });
};

const refreshUser = async (): Promise<AxiosResponse<Pick<AuthResponse, 'access' | 'accessExpires'>>> => {
  const refresh = localStorage.getItem('refresh');
  return (
    axios.post<Pick<AuthResponse, 'access' | 'accessExpires'>>(`${config.API_URL}/api/auth/refresh/`,
      {refresh})
  )
}

const guestUser = async (): Promise<AxiosResponse<GuestResponse>> => {
  return  axios.post<GuestResponse>(`${config.API_URL}/api/auth/guest/`);
}

const getUserInfo = async (): Promise<AxiosResponse<IUser>> => {
  return $api.get<IUser>(`${config.API_URL}/api/v1/me/`);
}

const authApi = {loginUser, confirmUser, refreshUser, guestUser, getUserInfo}

export default authApi