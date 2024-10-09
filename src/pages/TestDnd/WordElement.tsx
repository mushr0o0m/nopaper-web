/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import styles from './testDnd.module.css'

interface IWordElement {
  // onDrop: (coords: { x: number, y: number }) => { status: 'success' | 'error' | 'droppedIntoBlankSpace' },
  onDrop: React.RefObject<HTMLDivElement>,
  text: string
}

const WordElement: React.FC<IWordElement> = ({ text, onDrop }) => {

  const elementCoords = useRef<{ x: number, y: number }>({ x: 0, y: 0 })
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wordRef.current) return

    wordRef.current.ondragstart = () => false
    
    wordRef.current.addEventListener('mousedown', (onMouseDown) => {
      if (!wordRef.current) return
      console.log(wordRef.current.getBoundingClientRect().left, wordRef.current.getBoundingClientRect().top)
      const initMouseCoords = {
        x: onMouseDown.clientX,
        y: onMouseDown.clientY
      }

      const shiftX = onMouseDown.clientX - wordRef.current.getBoundingClientRect().left;
      const shiftY = onMouseDown.clientY - wordRef.current.getBoundingClientRect().top;

      wordRef.current.style.position = 'absolute'
      wordRef.current!.style.transition = 'none'
      wordRef.current.style.zIndex = '1000'
      
      const moveAt = (pageX: number, pageY: number) => {
        wordRef.current!.style.transform = 
        `translate(${pageX - initMouseCoords.x + shiftX}px, ${pageY - initMouseCoords.y + shiftY}px)`;
      }
      
      moveAt(onMouseDown.pageX, onMouseDown.pageY)

      const onMouseMove = (event: MouseEvent) => {
        if (!wordRef.current) return
        moveAt(event.pageX, event.pageY)
      }
      
      document.addEventListener('mousemove', onMouseMove)

      wordRef.current.addEventListener('mouseup', (event) => {
        if (!wordRef.current) return

        wordRef.current.hidden = true;
        const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        wordRef.current.hidden = false;

        if(onDrop.current === elemBelow){
          console.log('success')
        }
        if (onDrop.current !== elemBelow) {
          wordRef.current!.style.transition = 'transform ease-in-out .3s'
          setTimeout(() => {
            wordRef.current!.style.transform = `translate(0px, 0px)`;
            wordRef.current!.style.position = 'relative'
          }, 0)
        }
        
        document.removeEventListener('mousemove', onMouseMove);
        wordRef.current!.onmouseup = null;
      })
    })
  }, [])

  return (
    <div ref={wordRef} className={styles.taskWord + ' no-select'} style={{transition: 'flex ease-in-out .3s'}}>
      {text}
    </div>
  )
}

export default WordElement