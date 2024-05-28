
import React, { useState } from "react";
import { TaskContext } from "./TaskContext";
import { useExercise } from "../ExerciseContext/useExercise";
import { ITask } from "../../models";

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = (({ children }) => {

  const { getData } = useExercise();
  const [taskData, setTaskData] = useState<ITask[]>([]);

  const [tempGroupId, setTempGroupId] = useState<string>();

  React.useEffect(() => {
    setTaskData(getData()?.tasks.filter(task => task.group === tempGroupId) || [])
  }, [getData, tempGroupId])


  const value = {
    setTempGroupId,
    taskData,
    setTaskData
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>)
})