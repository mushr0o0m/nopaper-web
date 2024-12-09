import eventBus from "@/eventBus"
import React, { useCallback, useEffect, useRef } from "react"
import styles from './styles/index.module.css'

const TaskType6: React.FC<TaskTypesProps<ISimpleTask>> = ({ task }) => {
  const droppable = useRef<HTMLDivElement>(null)
  const taskId = task.id

  const onDragEnd = useCallback((droppedAt: Element | null, wordText: ITextOption): { status: 'success' | 'error' | 'isBlank' } => {
    if (droppable.current === droppedAt) {
      solveStartService.handleSolve(taskId, wordText.rightAnswer)
      eventBus.emit('onTaskFinish', {})
      return wordText.rightAnswer ? { status: 'success' } : { status: 'error' }
    }
    return { status: 'isBlank' }
  }, [])

  useEffect(() => {
    solveStartService.startSolveTask(task.audio[0])
  }, [])

  return (
    <>
      <div className={styles.taskContent}>
        <div
          ref={droppable}
          style={{
            backgroundImage: `url(${encodeURI(task.images[0].file)})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '300px',
            width: '300px'
          }}></div>
        <div className={styles.taskList}>
          {task.answerOptions.map((item, index) => (
            <DraggableWord
              key={index}
              text={item}
              onDragEnd={onDragEnd}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default TaskType6