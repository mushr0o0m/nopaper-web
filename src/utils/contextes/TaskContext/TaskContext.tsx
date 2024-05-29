import React from "react";
import { ITask } from "../../models";

export interface TaskContextProps {
  taskData: ITask[],
  setTempGroupId: React.Dispatch<React.SetStateAction<string | undefined>>
  
}

export const TaskContext = React.createContext<TaskContextProps>({
  setTempGroupId: () => {},
  taskData: [],
  
});