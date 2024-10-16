import React, { useEffect, useRef } from "react";
import styles from './testDnd.module.css'
import mushroom from './mushroom.png';
import DraggableWord from "./DraggableWord";
import solveStartService from "./SolveTaskService";

const TestDnd: React.FC = () => {
  const words = ['лоб', 'гриб', 'кот', 'краб']
  const rightWord = 'гриб'
  const droppable = useRef<HTMLDivElement>(null)
  const taskId = '001'

  const handleDragEnd = (word: string): { status: 'success' | 'error' } => {
    solveStartService.handleSolve(taskId, word === rightWord)
    return word === rightWord ? { status: 'success' } : { status: 'error' }
  }

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
              droppable={droppable}
              onDropEnd={handleDragEnd} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TestDnd