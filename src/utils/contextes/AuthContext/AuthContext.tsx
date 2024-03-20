import React from "react";

export interface AuthContextProps {
    token: null | string;
    signIn: (email: string) => Promise<void>;
    
  }
  
  export const AuthContext = React.createContext<AuthContextProps>({
    token: null,
    signIn: async () => { },
  });