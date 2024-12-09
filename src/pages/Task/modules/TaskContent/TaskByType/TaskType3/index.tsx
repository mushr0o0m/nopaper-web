/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react"
import solveStartService from "../../../Dnd/SolveTaskService"
import { ISimpleTask, ITextOption } from "../../../../exercise.types"
import styles from './styles/index.module.css'
import SelectableWord from "./components/SelectableWord"
import { TaskTypesProps } from "../../task.types"
import useSettingsMethods from "@/pages/Settings/hooks/useSettingsMethods"

const TaskType3: React.FC<TaskTypesProps<ISimpleTask>> = ({ task }) => {
  const {saveUserProgress} = useSettingsMethods()

  const onDragEnd = useCallback((_droppedAt: Element | null, wordText: ITextOption): { status: 'success' | 'error' | 'isBlank'} => {
    solveStartService.handleSolve(task.id, wordText.rightAnswer, saveUserProgress)
    return wordText.rightAnswer ? { status: 'success' } : { status: 'error' }
  }, [])

  useEffect(() => {
    solveStartService.startSolveTask(task.audio[0])
  }, [])

  return (
    <>
      <div className={styles.taskContent}>
        <div className={styles.taskList}>
          {task.answerOptions.map((item) => (
            <SelectableWord
              key={item.id}
              text={item}
              onDragEnd={onDragEnd}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default TaskType3