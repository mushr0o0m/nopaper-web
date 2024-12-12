import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ITask } from '../../exercise.types'
import useTask from '../../hooks/useTask'
import TaskType1 from './TaskByType/TaskType1And2'
import TaskType6 from './TaskByType/TaskType6'
import TaskType3 from './TaskByType/TaskType3'
import { TaskTypesProps } from './task.types'

const LoadingComponent: React.FC = () => <p>Загрузка...</p>
const taskByType: React.FC<TaskTypesProps>[] = [
  TaskType1,
  TaskType1,
  TaskType3,
  LoadingComponent,
  LoadingComponent,
  TaskType6,
  LoadingComponent,
  LoadingComponent,
  LoadingComponent,
  LoadingComponent,
  LoadingComponent,
  LoadingComponent,
  LoadingComponent,
  LoadingComponent,
  LoadingComponent,
  LoadingComponent,
]

const TaskContent: React.FC = () => {
  const { taskId, groupId } = useParams()
  const task = useTask(taskId)

  const [tempTask, setTempTask] = useState<ITask | undefined>()

  useEffect(() => {
    if (taskId && groupId) {
      setTempTask(task)
    }
  }, [task])

  useEffect(() => {
    const handleDragStart = (event: DragEvent) => event.preventDefault()
    window.addEventListener("dragstart", handleDragStart)
    return () => {
      window.removeEventListener("dragstart", handleDragStart)
    };
  }, [])

  const TaskComponent: React.FC<TaskTypesProps> = taskByType[tempTask?.type]

  return (
    <>
      {tempTask && <TaskComponent task={tempTask} />}
    </>
  )
}

export default TaskContent
