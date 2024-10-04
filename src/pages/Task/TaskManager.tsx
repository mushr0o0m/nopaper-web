/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useTask } from "../../utils/contextes/TaskContext/useTask";
import { LevelType } from "../../ui/Dot/Dot";
import ProgressBar from "../../ui/ProgressBar/ProgressBar";
import styles from './TaskManager.module.css'
import Star from "../../ui/Star/Star";
import { useExercise } from "../../utils/contextes/ExerciseContext/useExercise";
import SmallButton from "../../ui/SmallButton/SmallButton";

export const TaskManager: React.FC = () => {
  const { groupId, setId } = useParams();
  const { taskData, setTempGroupId} = useTask();
  const { getData } = useExercise();
  const navigate = useNavigate();
  const [taskIndex, setTaskIndex] = useState(0);

  React.useEffect(() => {
    if (!groupId) {
      navigate('/404', { replace: true });
      return;
    }
    setTempGroupId(groupId);
  }, [groupId])


  React.useEffect(() => {
    if (taskData.length > 0) {
      navigate(`${taskData[taskIndex].id}`, { replace: true })
    }
  }, [taskData, groupId, taskIndex])

  

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
            onClick={() => (setTaskIndex((prev) => prev + 1))}
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