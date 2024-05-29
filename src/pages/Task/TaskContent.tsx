
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskTypeFirst, TaskTypesProps } from "./modules";
import { useTask } from "../../utils/contextes/TaskContext/useTask";
import { ITask } from "../../utils/models";

// const TaskTypeSecond: React.FC = () => <p>Задание с типом 2</p>;
// const TaskTypeThird: React.FC = () => <p>Задание с типом 3</p>;
// const TaskTypeFourth: React.FC = () => <p>Задание с типом 4</p>;
// const TaskTypeFifth: React.FC = () => <p>Задание с типом 5</p>;
// const TaskTypeSixth: React.FC = () => <p>Задание с типом 6</p>;
// const TaskTypeSeventh: React.FC = () => <p>Задание с типом 7</p>;
// const TaskTypeEighth: React.FC = () => <p>Задание с типом 8</p>;
// const TaskTypeNinth: React.FC = () => <p>Задание с типом 9</p>;


export const TaskContent: React.FC = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { taskData } = useTask();

  const [tempTask, setTempTask] = useState<ITask | undefined>();
  const LoadingComponent: React.FC = () => <>qwdqwd</>;
  // const [TaskComponent, setTaskComponent] = useState<React.FC>(() =>  LoadingComponent);

  const taskByType = new Map<number, React.FC<TaskTypesProps>>([
    [0, TaskTypeFirst],
    // [1, TaskTypeSecond],
    // [2, TaskTypeThird],
    // [3, TaskTypeFourth],
    // [4, TaskTypeFifth],
    // [5, TaskTypeFifth],
    // [6, TaskTypeSixth],
    // [7, TaskTypeSeventh],
    // [8, TaskTypeEighth],
    // [9, TaskTypeNinth],
  ]);

  // React.useEffect(() => {
  //   if (taskId && taskData) {
  //     setTempTask(taskData.find((task) => task.id === taskId));
  //   }
  //   setTaskComponent(() => (taskByType.get(tempTask?.type)!))
  // }, [taskId, taskData, tempTask]);

  // React.useEffect(() => {
  //   console.log('asdasdas')
  //   if (taskId && taskData) {
  //     const foundTask = taskData.find((task) => task.id === taskId);
  //     setTempTask(foundTask);
  //     if (foundTask) {
  //       console.log(foundTask.type)
  //       const DynamicTaskComponent: React.FC<TaskTypesProps> = taskByType.get(foundTask.type)!; 
  //       setTaskComponent(() => () => <DynamicTaskComponent task={foundTask}/>);
  //     } else {
  //       setTaskComponent(LoadingComponent);
  //     }
  //   }
  // }, [taskId, taskData]);


  React.useEffect(() => {
    if (taskId && taskData) {
      const foundTask = taskData.find((task) => task.id === taskId);
      setTempTask(foundTask);
    }
  }, [taskId, taskData]);

  let TaskComponent: React.FC<TaskTypesProps> = LoadingComponent;

  if (tempTask) {
    switch (tempTask.type) {
      case 0:
        TaskComponent = TaskTypeFirst;
        break;
      // Добавьте другие варианты по мере необходимости
      default:
        console.error(`No component found for task type ${tempTask.type}`);
    }
  }

 
  return (
    <div className="task-content">
      {tempTask && <TaskComponent task={tempTask} />}
    </div>
  )
}