import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import TaskTypeFirst from './modules/TaskTypeFirst/TaskTypeFirst'
import { ITask } from '../../recoil/exercise/exercise.types'
import useTask from '../../recoil/exercise/hooks/useTask.ts'

const TaskContent: React.FC = () => {
  const { taskId, groupId } = useParams()
  const task = useTask(taskId + '')

  const [tempTask, setTempTask] = useState<ITask | undefined>()
  const LoadingComponent: React.FC = () => <p>Загрузка...</p>

  React.useEffect(() => {
    if (taskId && groupId) {
      setTempTask(task)
    }
  }, [task])

  let TaskComponent: React.FC = LoadingComponent

  if (tempTask) {
    switch (tempTask.type) {
      case 0:
        TaskComponent = () => <TaskTypeFirst task={tempTask} />
        break
      // След варианты
      default:
      // console.error(`No component found for task type ${tempTask.type}`);
    }
  }

  return <div className="task-content">{tempTask && <TaskComponent />}</div>
}

export default TaskContent
