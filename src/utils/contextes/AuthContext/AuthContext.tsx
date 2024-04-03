import React from "react";

export interface AuthContextProps {
    signIn: (email: string) => Promise<void>;
    confirm: (otp: string) => Promise<void>;
    refresh: () => Promise<void>;
    isLogining: boolean;
    isAuth: boolean;
  }
  
  export const AuthContext = React.createContext<AuthContextProps>({
    isAuth: false,
    isLogining: false,
    signIn: async () => {},
    confirm: async () => {},
    refresh: async () => {},
  });