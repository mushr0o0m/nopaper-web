/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react"
import DraggableWord from "../../../Dnd/DraggableWord"
import solveStartService from "../../../Dnd/SolveTaskService"
import { ISimpleTask, ITextOption } from "../../../../exercise.types"
import styles from './styles/index.module.css'
import { TaskTypesProps } from "../../task.types"
import useSettingsMethods from "@/pages/Settings/hooks/useSettingsMethods"

const TaskType1: React.FC<TaskTypesProps<ISimpleTask>> = ({ task }) => {
  const droppable = useRef<HTMLDivElement>(null)
  const {saveUserProgress} = useSettingsMethods()
  const isType2 = task.type === 1

  const onDragEnd = useCallback((droppedAt: Element | null, wordText: ITextOption): { status: 'success' | 'error' | 'isBlank'} => {
    if (droppable.current === droppedAt) {
      solveStartService.handleSolve(task.id, wordText.rightAnswer, saveUserProgress)
      return wordText.rightAnswer ? { status: 'success' } : { status: 'error' }
    }
    return { status: 'isBlank' }
  }, [task])

  useEffect(() => {
    solveStartService.startSolveTask(task.audio[0])
  }, [task])

  return (
    <div className={`${styles.taskContent} ${isType2 ? styles.taskContent_type2 : ''}`}>
      <div
        ref={droppable}
        className={`${styles.mainImg} ${isType2 ? styles.mainImg_type2 : ''}`}
        style={{
          backgroundImage: `url(${encodeURI(task.images[0].file)})`,
        }}></div>
      <div className={`${styles.taskList} ${isType2 ? styles.taskList_type2 : ''}`}>
        {task.answerOptions.map((item) => (
          <DraggableWord
            key={item.id}
            text={item}
            onDragEnd={onDragEnd}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskType1