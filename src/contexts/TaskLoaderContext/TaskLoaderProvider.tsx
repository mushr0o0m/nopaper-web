import React from "react";
import { TaskLoaderContext } from "./TaskLoaderContext";
interface TaskLoaderProviderProps {
  children: React.ReactNode;
}

export const TaskLoaderProvider: React.FC<TaskLoaderProviderProps> = ({ children }) => {



  const value = {

  }

  return (
    <TaskLoaderContext.Provider value={value}>
      {children}
      {isLoading && <Loader />}
    </TaskLoaderContext.Provider>)
}