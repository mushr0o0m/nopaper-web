import React, { useState } from "react";
import { ExerciseContext } from "./ExerciseContext";
import { AxiosError } from "axios";
import { IData, IPack } from "./exercise.types";
import exerciseApi from "./exercise.api";
import { useAuth } from "../AuthContext/hooks/useAuth";

interface ExerciseProviderProps {
  children: React.ReactNode;
}

const ExerciseProvider: React.FC<ExerciseProviderProps> = ({ children }) => {

  const [exercisePack, setExercisePack] = useState<IPack>();
  const [isPackRequested, setPackRequested] = useState(false);
  const [exercisePackId, setExercisePackId] = useState("");
  const { user } = useAuth();

  const fetchExercisePack = async () => {
    setPackRequested(true);
    exerciseApi.getListAvailableExercisePacks()
      .then(list => {
        setExercisePackId(list.data.results[0].id)
        return list.data.results[0].id
      })
      .then((id) => exerciseApi.getExercisePacks(id))
      .then(pack => setExercisePack({...pack.data, id: exercisePackId }))
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
    if (user?.isSuperuser || user?.subscriptions) {
      return exercisePack?.privateDataJson;
    }
    return exercisePack?.publicDataJson;
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
}

export default ExerciseProvider