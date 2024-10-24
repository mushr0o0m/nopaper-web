/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { LevelType } from "../../ui/Dot/Dot";
import ProgressBar from "../../ui/ProgressBar/ProgressBar";
import styles from './styles/taskManager.module.css';
import Star from "../../ui/Star/Star";
import SmallButton from "../../ui/SmallButton/SmallButton";
import { useExercise } from "../../recoil/exercise/hooks/exercise.hook";
import { useTask } from "../../recoil/exercise/hooks/task.hook";
import { ITask } from "../../recoil/exercise/exercise.types";

const TaskManager: React.FC = () => {
  const { groupId, setId } = useParams();
  const { getTaskData } = useTask();
  const { getData } = useExercise();
  const navigate = useNavigate();
  const [taskIndex, setTaskIndex] = useState(0);
  const [taskData, setTaskData] = useState<ITask[]>([])
  
  useEffect(() => {
    if (!groupId) {
      navigate('/404', { replace: true })
      return
    }
    const tasks = getTaskData(groupId)
    setTaskData(tasks)
    navigateToTempTaskContent(tasks[0].id)
  }, [])

  const navigateToTempTaskContent = (taskId: string) => {
    navigate(`${taskId}`, { replace: true })
  }

  const groupIds = getData()?.groups
    .filter(group => group.set === setId)
    .map(group => group.id) || [];

  const tempIndexGroup = groupId ? groupIds.indexOf(groupId) + 1 : -1;

  return (
    <div className="container">
      <div className={styles.window}>
        <header>
          <SmallButton
            onClick={() => navigate('../..', { replace: true, relative: "path" })}
            isColored={false}>назад
          </SmallButton>
          <SmallButton
            onClick={() => {
              const localIndex = taskIndex + 1
              setTaskIndex((prev) => prev + 1)
              navigateToTempTaskContent(taskData[localIndex].id)
            }}
            isColored={false}>вперед
          </SmallButton>
        </header>
        <section>
          <Outlet />
        </section>
        <footer className={styles.footer}>
          <div className={styles.tempGroup}>
            <h3 className={styles.tempGroup__index}>{tempIndexGroup}</h3>
            <Star color={tempIndexGroup} isOn={true} />
          </div>
          <ProgressBar
            className={styles.footer__pb}
            levels={[
              { level: 1, status: taskIndex === 0 ? LevelType.Current :  LevelType.Default},
              { level: 2, status: taskIndex === 1 ? LevelType.Current :  LevelType.Default },
              { level: 3, status: taskIndex === 2 ? LevelType.Current :  LevelType.Default },
              { level: 4, status: taskIndex === 3 ? LevelType.Current :  LevelType.Default },
              { level: 5, status: taskIndex === 4 ? LevelType.Current :  LevelType.Default },
              { level: 6, status: taskIndex === 5 ? LevelType.Current :  LevelType.Default },
              { level: 7, status: taskIndex === 6 ? LevelType.Current :  LevelType.Default },
              { level: 8, status: taskIndex === 7 ? LevelType.Current :  LevelType.Default },
              { level: 9, status: taskIndex === 8 ? LevelType.Current :  LevelType.Default },
              { level: 10, status: taskIndex === 9 ? LevelType.Current :  LevelType.Default },
            ]} />
        </footer>
      </div>
    </div>
  )
}

export default TaskManager