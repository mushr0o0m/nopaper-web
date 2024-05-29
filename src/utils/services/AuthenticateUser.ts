import axios, { AxiosResponse } from 'axios';
import { config } from '../config'
import { AuthResponse, GuestResponse } from '../models/response/AuthResponse';
import { IUser } from '../models/user/User';
import $api from '../http';

export const loginUser = async (email: string): Promise<AxiosResponse<Pick<IUser, 'id'>>> => {
  return axios.post<Pick<IUser, 'id'>>(`${config.API_URL}/api/auth/login/`, { email });
};

export const confirmUser = async (email: string, otp: string): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post<AuthResponse>(`${config.API_URL}/api/auth/confirm/`, {
    email,
    otp
  });
};

export const refreshUser = async (): Promise<AxiosResponse<Pick<AuthResponse, 'access' | 'accessExpires'>>> => {
  const refresh = localStorage.getItem('refresh');
  return (
    axios.post<Pick<AuthResponse, 'access' | 'accessExpires'>>(`${config.API_URL}/api/auth/refresh/`,
      {refresh})
  )
}

export const guestUser = async (): Promise<AxiosResponse<GuestResponse>> => {
  return  axios.post<GuestResponse>(`${config.API_URL}/api/auth/guest/`);
}

export const getUserInfo = async (): Promise<AxiosResponse<IUser>> => {
  return $api.get<IUser>(`${config.API_URL}/api/v1/me/`);
}