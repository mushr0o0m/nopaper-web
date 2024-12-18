import { useSetRecoilState } from 'recoil'
import authAtom from '@/pages/Authorization/auth.atom'
import authApi from '@/pages/Authorization/auth.api'
import { HTTPResponse } from '@/services/http/http.types'
import { AuthResponse, IUser } from '../auth.types'

const useAuthMethods = () => {
  const setAuthData = useSetRecoilState(authAtom)

  const signIn = async (email: string): Promise<HTTPResponse<Pick<IUser, 'id'>>> => {
    const resp = await authApi.loginUser(email)
    return resp
  }

  const confirm = async (otp: string, email: string): Promise<HTTPResponse<AuthResponse>> => {
    const response = await authApi.confirmUser(email, otp)
    if (response.status === 'error') {
      return response
    }
    setAuthData((prev) => ({ ...prev, isAuth: true, access: response.body.access }))
    localStorage.setItem('refresh', response.body.refresh)
    localStorage.setItem('access', response.body.access)
    return response
  }

  const refresh = async (): Promise<void> => {
    const response = await authApi.refreshUser()
    if (response.status === 'error') return
    await loadUser()
    setAuthData((prev) => ({ ...prev, isAuth: true, access: response.body.access }))
    localStorage.setItem('access', response.body.access)
  }

  const guestInit = async (): Promise<void> => {
    if (localStorage.getItem('userId')) return
    const response = await authApi.guestUser()
    if (response.status === 'error') return
    localStorage.setItem('userId', response.body.userId)
    await loadUser()
  }

  const loadUser = async (): Promise<void> => {
    const response = await authApi.getUserInfo()
    if (response.status === 'error') return
    setAuthData((prev) => ({ ...prev, user: response.body }))
  }

  return {
    signIn,
    confirm,
    refresh,
    guestInit,
    loadUser,
  }
}

export default useAuthMethods
