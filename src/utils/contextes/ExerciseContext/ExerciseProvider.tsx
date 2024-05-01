import React from "react";
import { ExerciseContext } from "./ExerciseContext";

interface ExerciseProviderProps {
  children: React.ReactNode;
}

export const ExerciseProvider: React.FC<ExerciseProviderProps> = (({ children }) => {

  

  const value = {
    
  }

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>)
})