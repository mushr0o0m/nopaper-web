
import React, { useState } from "react";
import { TaskContext } from "./TaskContext";
import { useExercise } from "../ExerciseContext/hooks/useExercise";
import { ITask } from "../ExerciseContext/exercise.types";

interface TaskProviderProps {
  children: React.ReactNode;
}

const TaskProvider: React.FC<TaskProviderProps> = (({ children }) => {

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

export default TaskProvider