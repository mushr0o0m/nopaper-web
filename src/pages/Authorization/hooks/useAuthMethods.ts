import { useRecoilState } from 'recoil'
import authApi from '../auth.api.ts'
import authAtom from '../auth.atom.ts'

const useAuthMethods = () => {
  const [authData, setAuthData] = useRecoilState(authAtom)

  const signIn = async (email: string): Promise<void> => {
    await authApi.loginUser(email)
    setAuthData((prev) => ({ ...prev, email, isLogining: true }))
  }

  const confirm = async (otp: string): Promise<void> => {
    if (!authData.email) throw new Error('Email is missing!')
    const response = await authApi.confirmUser(authData.email, otp)
    if(response.status === 'error') return
    setAuthData((prev) => ({ ...prev, isAuth: true }))
    localStorage.setItem('access', response.body.access)
    localStorage.setItem('refresh', response.body.refresh)
    // await updateUserFromApi()
  }

  const refresh = async (): Promise<void> => {
    const response = await authApi.refreshUser()
    if(response.status === 'error') return
    await loadUser()
    setAuthData((prev) => ({ ...prev, isAuth: true }))
    localStorage.setItem('access', response.body.access)
  }

  const guest = async (): Promise<void> => {
    const response = await authApi.guestUser()
    if(response.status === 'error') return
    localStorage.setItem('userId', response.body.userId)
    await loadUser()
  }

  const loadUser = async (): Promise<void> => {
    const response = await authApi.getUserInfo()
    if(response.status === 'error') return
    setAuthData((prev) => ({ ...prev, user: response.body }))
  }

  return {
    signIn,
    confirm,
    refresh,
    guest,
    loadUser,
  }
}

export default useAuthMethods
