/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
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
  const { taskData, setTempGroupId } = useTask();
  const { getData } = useExercise();
  const navigate = useNavigate();


  React.useEffect(() => {
    if (!groupId) {
      navigate('/404', { replace: true });
      return;
    }
    setTempGroupId(groupId);
  }, [groupId])

  React.useEffect(() => {
    if (taskData.length > 0) {
      navigate(`${taskData[0].id}`, { replace: true })
    }
  }, [taskData, groupId])

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
              { level: 1, status: LevelType.Correct },
              { level: 2, status: LevelType.Correct },
              { level: 3, status: LevelType.Correct },
              { level: 4, status: LevelType.Correct },
              { level: 5, status: LevelType.Wrong },
              { level: 6, status: LevelType.Correct },
              { level: 7, status: LevelType.Current },
              { level: 8, status: LevelType.Default },
              { level: 9, status: LevelType.Default },
              { level: 10, status: LevelType.Default },
            ]} />
        </footer>
      </div>
    </div>
  )
}