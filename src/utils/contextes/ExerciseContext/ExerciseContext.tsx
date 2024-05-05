import React from "react";

export interface ExerciseContextProps {
  checkAndFetchIfNeeded: () => Promise<void>;
}

export const ExerciseContext = React.createContext<ExerciseContextProps>({
  checkAndFetchIfNeeded: async () => { },
});