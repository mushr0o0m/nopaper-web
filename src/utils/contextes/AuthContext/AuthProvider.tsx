import React from "react";
import { useState } from "react";
import { loginUser, confirmUser, refreshUser, guestUser, getUserInfo } from "../../services/AuthenticateUser";
import { AuthContext } from "./AuthContext";
import { AxiosError } from "axios";
import { IUser } from "../../models/user/User";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (({ children }) => {

  const [isLogining, setIsLogining] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>();
  const [email, setEmail] = useState<string>();

  const signIn = async (email: string): Promise<void> => {
    try {
      await loginUser(email);
      setIsLogining(true);
      setEmail(email);
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message);
      throw error;
    }
  }

  const confirm = async (otp: string): Promise<void> => {
    try {
      if (!email)
        throw new Error("Email is missing!");
      const response = await confirmUser(email, otp);
      await updateUserFromApi();
      setIsAuth(true);
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message);
      throw error;
    }
  }

  const refresh = async (): Promise<void> => {
    try {
      const response = await refreshUser();
      await updateUserFromApi();
      setIsAuth(true);
      localStorage.setItem('access', response.data.access);
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message);
      throw error;
    }
  }

  const guest = async (): Promise<void> => {
    try {
      const response = await guestUser();
      localStorage.setItem('userId', response.data.userId);
      await updateUserFromApi();
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message);
      throw error;
    }
  }

  const updateUserFromApi = async (): Promise<void> => {
    try {
      const response = await getUserInfo();
      setUser(response.data);
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message);
      throw error;
    }
  }

  const value = {
    signIn,
    confirm,
    refresh,
    guest,
    isLogining,
    isAuth,
    updateUserFromApi,
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>)
})