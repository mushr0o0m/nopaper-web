import React, { useEffect, useRef } from "react";
import styles from './testDnd.module.css'
import mushroom from './mushroom.png';
import WordElement from "./WordElement";

const TestDnd: React.FC = () => {
  
  const words = ['лоб', 'гриб', 'кот', 'краб']
   const ref = useRef<HTMLDivElement>(null)

  //  useEffect(() => {
  //   const domRect = ref.current?.getBoundingClientRect()
    
  //  }, [])
  
  return (
    <>
      <div className={styles.taskContent}>
        <div
        ref={ref}
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
          <WordElement key={index} text={item} onDrop={ref}/>
        ))}
        </div>
      </div>
    </>
  )
}

export default TestDnd