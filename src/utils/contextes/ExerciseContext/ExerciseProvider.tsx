import React, { useState } from "react";
import { ExerciseContext } from "./ExerciseContext";
import { IData, IExercisePacks } from "../../models";
import { AxiosError } from "axios";
import { getExercisePacks } from "../../services";
import { useAuth } from "../AuthContext/useAuth";

interface ExerciseProviderProps {
  children: React.ReactNode;
}

export const ExerciseProvider: React.FC<ExerciseProviderProps> = (({ children }) => {

  const [exercisePack, setExercisePack] = useState<IExercisePacks>();
  const [isPackRequested, setPackRequested] = useState(false);
  const {user} = useAuth();

  const fetchExercisePack = async () => {
    setPackRequested(true);
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
        .catch(error => { throw error });
    }
  }

  const getData = (): IData | undefined => {
    if (user?.isSuperuser || user?.subscriptions){
      return exercisePack?.results[0].privateDataJson;
    }
    return exercisePack?.results[0].publicDataJson;
  }

  const value = {
    checkAndFetchIfNeeded,
    exercisePack,
    getData
  }

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>)
})