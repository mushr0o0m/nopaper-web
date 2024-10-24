
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TaskTypeFirst from "./modules/TaskTypeFirst/TaskTypeFirst";
import { useTask } from "../../recoil/exercise/hooks/task.hook";
import { ITask } from "../../recoil/exercise/exercise.types";


const TaskContent: React.FC = () => {
  const { taskId, groupId } = useParams();
  const { getTaskById } = useTask();

  const [tempTask, setTempTask] = useState<ITask | undefined>();
  const LoadingComponent: React.FC = () => <p>Загрузка...</p>;

  React.useEffect(() => {
    if (taskId && groupId) {
      setTempTask(getTaskById(groupId, taskId))
    }
  }, [taskId]);

  let TaskComponent: React.FC = LoadingComponent;

  if (tempTask) {
    switch (tempTask.type) {
      case 0:
        TaskComponent = () => <TaskTypeFirst task={tempTask}/>;
        break;
      // След варианты
      default:
        // console.error(`No component found for task type ${tempTask.type}`);
    }
  }


  return (
    <div className="task-content">
      {tempTask && <TaskComponent />}
    </div>
  )
}

export default TaskContent