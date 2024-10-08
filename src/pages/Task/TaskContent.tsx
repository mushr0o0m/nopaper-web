
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTask } from "../../contextes/TaskContext/hooks/useTask";
import { ITask } from "../../contextes/ExerciseContext/exercise.types";
import TaskTypeFirst from "./modules/TaskTypeFirst/TaskTypeFirst";


const TaskContent: React.FC = () => {
  const { taskId } = useParams();
  const { taskData } = useTask();

  const [tempTask, setTempTask] = useState<ITask | undefined>();
  const LoadingComponent: React.FC = () => <p>Загрузка...</p>;

  React.useEffect(() => {
    if (taskId && taskData) {
      const foundTask = taskData.find((task) => task.id === taskId);
      setTempTask(foundTask);
    }
  }, [taskId, taskData]);

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