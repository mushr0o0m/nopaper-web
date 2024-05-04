import React from "react";


interface CheckAuthProps {
  children: React.JSX.Element;
}

export const CheckAuth: React.FC<CheckAuthProps> = ({ children }) => {
  if(localStorage.getItem('access') || localStorage.getItem('userId')){
    console.log('authorizated!')
  }

  return children;
}