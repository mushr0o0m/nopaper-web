import React from "react";

export interface AuthContextProps {
    signIn: (email: string) => Promise<void>;
    confirm: (otp: string) => Promise<void>;
    refresh: () => Promise<void>;
    guest: () => Promise<void>;
    isLogining: boolean;
    isAuth: boolean;
  }
  
  export const AuthContext = React.createContext<AuthContextProps>({
    signIn: async () => {},
    confirm: async () => {},
    refresh: async () => {},
    guest: async () => {},
    isAuth: false,
    isLogining: false,
  });