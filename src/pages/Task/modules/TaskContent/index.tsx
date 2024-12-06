import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ITask } from '../../exercise.types'
import useTask from '../../hooks/useTask'
import TaskType1 from './TaskByType/TaskType1'
import { TaskTypesProps } from '../../task.types'
import TaskType6 from './TaskByType/TaskType6'

const LoadingComponent: React.FC = () => <p>Загрузка...</p>
const taskByType: React.FC<TaskTypesProps>[] = [
  TaskType1,
  LoadingComponent,
  LoadingComponent,
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

  const TaskComponent: React.FC<TaskTypesProps> = taskByType[tempTask?.type]

  return (
    <div className="task-content">
      {tempTask && <TaskComponent task={tempTask} />}
    </div>
  )
}

export default TaskContent
