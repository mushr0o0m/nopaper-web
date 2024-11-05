import axios from 'axios'
import config from '../../config.ts'
import $api from '../../services/http'
import { AuthResponse, GuestResponse, IUser } from './auth.types.ts'
import { HTTPResponse } from '../../services/http/http.types.ts'
import { handleHttpResponse, handleHttpError } from '../../services/http/http.utils.ts'

const loginUser = async (email: string): Promise<HTTPResponse<Pick<IUser, 'id'>>> => {
  return axios.post<Pick<IUser, 'id'>>(`${config.API_URL}/api/auth/login/`, { email })
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const confirmUser = async (email: string, otp: string): Promise<HTTPResponse<AuthResponse>> => {
  return axios.post<AuthResponse>(`${config.API_URL}/api/auth/confirm/`, {
    email,
    otp,
  })
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const refreshUser = async (): Promise<HTTPResponse<Pick<AuthResponse, 'access' | 'accessExpires'>>> => {
  const refresh = localStorage.getItem('refresh')
  return axios.post<Pick<AuthResponse, 'access' | 'accessExpires'>>(`${config.API_URL}/api/auth/refresh/`, { refresh })
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const guestUser = async (): Promise<HTTPResponse<GuestResponse>> => {
  return axios.post<GuestResponse>(`${config.API_URL}/api/auth/guest/`)
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const getUserInfo = async (): Promise<HTTPResponse<IUser>> => {
  return $api.get<IUser>(`${config.API_URL}/api/v1/me/`)
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const authApi = { loginUser, confirmUser, refreshUser, guestUser, getUserInfo }

export default authApi
