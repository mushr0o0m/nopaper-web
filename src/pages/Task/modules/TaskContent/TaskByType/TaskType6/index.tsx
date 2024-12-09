/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react"
import styles from './styles/index.module.css'
import { IImageMatchTask } from "@/pages/Task/exercise.types"
import DraggableWord from "../../../Dnd/DraggableWord"
import solveStartService from "../../../Dnd/SolveTaskService"
import { TaskTypesProps } from "../../task.types"
import useSettingsMethods from "@/pages/Settings/hooks/useSettingsMethods"

const TaskType6: React.FC<TaskTypesProps<IImageMatchTask>> = ({ task }) => {
  const droppables = useRef<HTMLDivElement[]>([])
  const {saveUserProgress} = useSettingsMethods()

  const onDragEnd = useCallback((droppedAt: Element | null): { status: 'success' | 'error' | 'isBlank'} => {
    const tempImageIndex = droppables.current.findIndex(i => i === droppedAt)
    if (tempImageIndex !== -1) {
      solveStartService.handleSolve(task.id, task.images[tempImageIndex].rightAnswer, saveUserProgress)
      return task.images[tempImageIndex].rightAnswer ? { status: 'success' } : { status: 'error' }
    }
    return { status: 'isBlank' }
  }, [])

  useEffect(() => {
    solveStartService.startSolveTask(task.audio[0])
  }, [])

  return (
    <div className={styles.taskContent}>
      <div className={styles.taskList}>
        <DraggableWord
          text={task.wordToMatch}
          onDragEnd={onDragEnd}
        />
      </div>
      <div className={styles.imges}>
        {task.images.map((image) => (
          <div
            key={image.id}
            className={styles.img}
            ref={el => droppables.current.push(el)}
            style={{
              backgroundImage: `url(${encodeURI(image.file)})`
            }}></div>
        ))}
      </div>
    </div>
  )
}

export default TaskType6
