import React, { useCallback, useEffect, useRef } from "react";
import styles from './testDnd.module.css'
import mushroom from './mushroom.png';
import DraggableWord from "./DraggableWord";
import solveStartService from "./SolveTaskService";
import eventBus from "@/eventBus";

const TestDnd: React.FC = () => {
  const words = ['лоб', 'гриб', 'кот', 'краб']
  const rightWord = 'гриб'
  const droppable = useRef<HTMLDivElement>(null)
  const taskId = '001'

  const onDragEnd = useCallback((droppedAt: Element | null, wordText: string): { status: 'success' | 'error' | 'isBlank' } => {
    if (droppable.current === droppedAt) {
      solveStartService.handleSolve(taskId, wordText === rightWord)
      eventBus.emit('onTaskFinish', {})
      return wordText === rightWord ? { status: 'success' } : { status: 'error' }
    }
    return { status: 'isBlank' }
  }, [])

  useEffect(() => {
    solveStartService.startSolveTask()
  }, [taskId])

  return (
    <>
      <div className={styles.taskContent}>
        <div
          ref={droppable}
          style={{
            backgroundImage: `url(${mushroom})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '300px',
            width: '300px'
          }}></div>
        <div className={styles.taskList}>
          {words.map((item, index) => (
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

export default TestDnd