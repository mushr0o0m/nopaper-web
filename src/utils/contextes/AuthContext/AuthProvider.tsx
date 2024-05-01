import React from "react";
import { useState } from "react";
import { loginUser, confirmUser, refreshUser, guestUser } from "../../services/AuthenticateUser";
import { AuthContext } from "./AuthContext";
import { AxiosError } from "axios";
import { User } from "../../models/user/User";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (({ children }) => {

  const [isLogining, setIsLogining] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  const signIn = async (email: string): Promise<void> => {
    try {
      const response = await loginUser(email);
      setIsLogining(true);
      setUser({ email: email, id: response.data.id, isActivated: false });
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message);
      throw error;
    }
  }

  const confirm = async (otp: string): Promise<void> => {
    try {
      if (!user || !user.email)
        throw new Error("User is missing!");
      const response = await confirmUser(user.email, otp);
      setUser({ ...user, isActivated: true });
      setIsAuth(true);
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      console.log(response)
    } catch (error) {
      console.log((error as AxiosError)?.response?.data || (error as Error).message);
      throw error;
    }
  }

  const refresh = async (): Promise<void> => {
    try {
      const response = await refreshUser();
      if (!user)
        setUser({ isActivated: true });
      else
        setUser({ ...user, isActivated: true });
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
    isAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>)
})