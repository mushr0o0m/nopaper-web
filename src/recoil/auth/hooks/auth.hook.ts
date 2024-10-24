import { useRecoilState } from "recoil"
import { authState } from "../auth.atom"
import { AxiosError } from "axios"
import authApi from "../auth.api"

export const useAuth = () => {
  const [authData, setAuthData] = useRecoilState(authState)

  const signIn = async (email: string): Promise<void> => {
    try {
      await authApi.loginUser(email)
      setAuthData(prev => ({...prev, email, isLogining: true}))
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message)
      throw error
    }
  }

  const confirm = async (otp: string): Promise<void> => {
    try {
      if (!authData.email)
        throw new Error("Email is missing!");
      const response = await authApi.confirmUser(authData.email, otp)
      setAuthData(prev => ({...prev, isAuth: true}))
      localStorage.setItem('access', response.data.access)
      localStorage.setItem('refresh', response.data.refresh)
      // await updateUserFromApi()
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message)
      throw error
    }
  }

  const refresh = async (): Promise<void> => {
    try {
      const response = await authApi.refreshUser()
      await updateUserFromApi()
      setAuthData(prev => ({...prev, isAuth: true}))
      localStorage.setItem('access', response.data.access)
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message)
      throw error
    }
  }

  const guest = async (): Promise<void> => {
    try {
      const response = await authApi.guestUser()
      localStorage.setItem('userId', response.data.userId)
      await updateUserFromApi()
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message)
      throw error
    }
  }

  const updateUserFromApi = async (): Promise<void> => {
    try {
      const response = await authApi.getUserInfo()
      setAuthData(prev => ({...prev, user: response.data}))
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message)
      throw error
    }
  }

  return {
    signIn,
    confirm,
    refresh,
    guest,
    updateUserFromApi,
  }
}