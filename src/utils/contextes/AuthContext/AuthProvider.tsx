import React from "react";
import { useState } from "react";
import { authenticateUser } from "./AuthenticateUser";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (({ children }) => {

  const [token, setToken] = useState<string | null>(null);

  // React.useEffect(() => {
  //   const savedToken = Cookies.get('Token');
  //   if (savedToken) {
  //     setToken(savedToken);
  //   }
  // }, []);


  const signIn = (email: string): Promise<void> => {
    return authenticateUser(email)
      .then((status) => {
         //Передавать статус
        
        
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
        throw error;
      });
  }

  const value = {
    signIn, token,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>)
})