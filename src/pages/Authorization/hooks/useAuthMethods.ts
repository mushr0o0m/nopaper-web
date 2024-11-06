import { useRecoilState } from 'recoil'
import authAtom from '@/pages/Authorization/auth.atom'
import authApi from '@/pages/Authorization/auth.api'

const useAuthMethods = () => {
  const [authData, setAuthData] = useRecoilState(authAtom)

  const signIn = async (email: string): Promise<void> => {
    await authApi.loginUser(email)
    setAuthData((prev) => ({ ...prev, email, isLogining: true }))
  }

  const confirm = async (otp: string): Promise<void> => {
    if (!authData.email) throw new Error('Email is missing!')
    const response = await authApi.confirmUser(authData.email, otp)
    if (response.status === 'error') return
    setAuthData((prev) => ({ ...prev, isAuth: true }))
    localStorage.setItem('access', response.body.access)
    localStorage.setItem('refresh', response.body.refresh)
  }

  const refresh = async (): Promise<void> => {
    const response = await authApi.refreshUser()
    if (response.status === 'error') return
    await loadUser()
    setAuthData((prev) => ({ ...prev, isAuth: true }))
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
