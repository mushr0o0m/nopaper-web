import React from "react";
import { IUser } from "./auth.types";

export interface AuthContextProps {
  signIn: (email: string) => Promise<void>;
  confirm: (otp: string) => Promise<void>;
  refresh: () => Promise<void>;
  guest: () => Promise<void>;
  updateUserFromApi: () => Promise<void>;
  user: IUser | undefined;
  isLogining: boolean;
  isAuth: boolean;
}

export const AuthContext = React.createContext<AuthContextProps>({
  signIn: async () => { },
  confirm: async () => { },
  refresh: async () => { },
  guest: async () => { },
  updateUserFromApi: async () => { },
  user: undefined,
  isAuth: false,
  isLogining: false,
});