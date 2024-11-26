import React, { createContext } from "react"
import Loader from "@/shared/PageLoader"
import { useRecoilValue } from "recoil"
import { exerciseState } from "@/pages/Task/exercise.atom"

interface TaskLoaderProviderProps {
  children: React.ReactNode
}

const TaskLoaderContext = createContext(null)

const TaskLoaderProvider: React.FC<TaskLoaderProviderProps> = ({ children }) => {
  const data = useRecoilValue(exerciseState)


  return (
    <TaskLoaderContext.Provider value={null}>
      {data.isPackRequested ? <Loader /> : children}
    </TaskLoaderContext.Provider>)
}

export default TaskLoaderProvider