import React, { useRef, useState } from "react";
import styles from './testDnd.module.css'
import mushroom from './mushroom.png';
import DraggableWord from "./DraggableWord";

const TestDnd: React.FC = () => {
  const [isDragDisabled, setIsDragDisabled] = useState(false);
  const words = ['лоб', 'гриб', 'кот', 'краб']
  const rightWord = 'гриб'
  const droppable = useRef<HTMLDivElement>(null)

  const handleDragEnd = (word: string): { status: 'success' | 'error' } => {
    setIsDragDisabled(true)
    return word === rightWord ? { status: 'success' } : { status: 'error' }
  }

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
              isDragDisabled={isDragDisabled}
              onDropEnd={handleDragEnd} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TestDnd