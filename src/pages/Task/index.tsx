/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import styles from './styles/taskManager.module.css'
import Star from '../GroupMenu/modules/LevelMenuElement/components/Star'
import SmallButton from '../../shared/SmallButton/SmallButton'
import { useRecoilValue } from 'recoil'
import exerciseSelectors from './exercise.selectors'
import useGroupTasks from './hooks/useGroupTasks'
import ProgressBar from '@/pages/Task/components/ProgressBar'
import settingsSelectors from '../Settings/settings.selectors'

const TaskManager: React.FC = () => {
  const data = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)
  const progress = useRecoilValue(settingsSelectors.getProgressByGroups)
  const { groupId, setId } = useParams()
  const groupTasks = useGroupTasks(groupId + '')

  const navigate = useNavigate()
  const [taskIndex, setTaskIndex] = useState(0)

  useEffect(() => {
    if (!groupId) {
      navigate('/404', { replace: true })
      return
    }
  }, [])

  useEffect(() => {
    if (groupTasks)
      navigateToTempTaskContent(groupTasks[0]?.id)
  }, [groupTasks])

  const navigateToTempTaskContent = (taskId: string) => {
    navigate(`${taskId}`, { replace: true })
  }
  const groupIds = data?.groups.filter((group) => group.set === setId).map((group) => group.id) || []

  const tempIndexGroup = groupId ? groupIds.indexOf(groupId) + 1 : -1

  return (
    <div className="container">
      <div className={styles.window}>
        <header>
          <SmallButton
            onClick={() => navigate('../..', { replace: true, relative: 'path' })}
            isColored={false}>
            назад
          </SmallButton>
          <SmallButton
            onClick={() => {
              const localIndex = taskIndex + 1
              setTaskIndex((prev) => prev + 1)
              navigateToTempTaskContent(groupTasks[localIndex].id)
            }}
            isColored={false}>
            вперед
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
            progress={progress[groupId]?.progress || {}}
            currentTaskIndex={taskIndex}
            className={styles.footer__pb}
          />
        </footer>
      </div>
    </div>
  )
}

export default TaskManager
