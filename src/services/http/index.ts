import axios from 'axios'
import { AuthResponse } from '@/pages/Authorization/auth.types'

export const API_URL = 'https://dev-store.nebumaga.com'

const http = axios.create({
  baseURL: API_URL,
})

http.interceptors.request.use((config) => {
  if (localStorage.getItem('access')) config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
  else config.headers['X-Account-Id'] = `${localStorage.getItem('userId')}`
  return config
})

http.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !originalRequest.isRetry) {
      originalRequest.isRetry = true
      try {
        const refreshToken = localStorage.getItem('refresh')
        const response = await axios.post<Pick<AuthResponse, 'access' | 'accessExpires'>>(
          `${API_URL}/api/auth/login/`,
          {
            refreshToken,
          }
        )
        localStorage.setItem('access', response.data.access)
        return http.request(originalRequest)
      } catch (error) {
        console.log('Unauthorized!!!')
      }
    }
    throw error
  }
)

export default http
