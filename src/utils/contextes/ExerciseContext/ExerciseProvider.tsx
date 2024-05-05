import React, { useState } from "react";
import { ExerciseContext } from "./ExerciseContext";
import { IExercisePacks } from "../../models";
import { AxiosError } from "axios";
import { getExercisePacks } from "../../services";

interface ExerciseProviderProps {
  children: React.ReactNode;
}

export const ExerciseProvider: React.FC<ExerciseProviderProps> = (({ children }) => {

  const [exercisePack, setExercisePack] = useState<IExercisePacks>();
  const [isPackRequested, setPackRequested] = useState(false);

  const fetchExercisePack = async () => {
    getExercisePacks()
      .then(pack => setExercisePack(pack.data))
      .catch(error => {
        console.log((error as AxiosError)?.response?.data || (error as Error).message);
        setPackRequested(false);
        throw error;
      });
  }

  const checkAndFetchIfNeeded = async () => {
    if (!exercisePack && !isPackRequested) {
      fetchExercisePack()
        .catch(error => { throw error })
        .finally(() => setPackRequested(false));
    }
  }

  const value = {
    checkAndFetchIfNeeded,
  }

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>)
})