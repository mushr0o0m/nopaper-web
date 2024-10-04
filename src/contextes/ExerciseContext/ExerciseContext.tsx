import React from "react";
import { IData, IExercisePacks } from "./exercise.types";

export interface ExerciseContextProps {
  checkAndFetchIfNeeded: () => Promise<void>;
  exercisePack: IExercisePacks | undefined;
  getData: () => IData | undefined;
}

export const ExerciseContext = React.createContext<ExerciseContextProps>({
  checkAndFetchIfNeeded: async () => { },
  exercisePack: undefined,
  getData: () => undefined,
});