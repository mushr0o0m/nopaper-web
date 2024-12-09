/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react"
import Loader from "@/shared/PageLoader"
import useAuthMethods from "@/pages/Authorization/hooks/useAuthMethods"
import useSettingsMethods from "@/pages/Settings/hooks/useSettingsMethods"
import useExercisesLoad from "@/pages/Task/hooks/useExercisesLoad"

interface TaskLoaderProviderProps {
  children: React.ReactNode
}

const TaskLoaderContext = createContext(null)

const TaskLoaderProvider: React.FC<TaskLoaderProviderProps> = ({ children }) => {

  const [loadingFinish, setLoadingFinish] = useState(false)
  const { guestInit } = useAuthMethods()
  const { loadUser } = useSettingsMethods()
  const { loadExercises } = useExercisesLoad()

  useEffect(() => {
    Promise.all([guestInit(), loadUser(), loadExercises()]).finally(() => setLoadingFinish(true))
  }, [])

  return (
    <TaskLoaderContext.Provider value={null}>
      {!loadingFinish ? <Loader /> : children}
    </TaskLoaderContext.Provider>)
}

export default TaskLoaderProvider