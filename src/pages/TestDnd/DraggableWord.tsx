/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import styles from './testDnd.module.css'
import solveStartService from "./SolveTaskService";

interface IDraggableWord {
  onDropEnd: (word: string) => { status: 'success' | 'error' },
  droppable: React.RefObject<HTMLDivElement>,
  text: string
}

const DraggableWord: React.FC<IDraggableWord> = ({ text, droppable, onDropEnd }) => {
  const wordRef = useRef<HTMLDivElement>(null);

  const onMouseDown = (onMouseDownEvent: MouseEvent) => {
    if (!wordRef.current || solveStartService.isDragDisabled) return
    const initMouseCoords = {
      x: onMouseDownEvent.clientX,
      y: onMouseDownEvent.clientY
    }

    wordRef.current!.style.transition = 'none'
    wordRef.current.style.cursor = 'grabbing'
    wordRef.current.style.backgroundColor = 'white'
    wordRef.current.style.transform = 'scale(1.5)'

    const moveAt = (pageX: number, pageY: number) => {
      wordRef.current!.style.transform =
        `translate(${pageX - initMouseCoords.x}px, ${pageY - initMouseCoords.y}px) scale(1.15)`
    }

    moveAt(onMouseDownEvent.pageX, onMouseDownEvent.pageY)

    const onMouseMove = (event: MouseEvent) => {
      if (!wordRef.current || solveStartService.isDragDisabled) return
      moveAt(event.pageX, event.pageY)
    }

    document.addEventListener('mousemove', onMouseMove)

    const onMouseUp = (onMouseUpEvent: MouseEvent) => {
      if (!wordRef.current || solveStartService.isDragDisabled) return

      wordRef.current.hidden = true;
      const elemBelow = document.elementFromPoint(onMouseUpEvent.clientX, onMouseUpEvent.clientY);
      wordRef.current.hidden = false;

      if (droppable.current === elemBelow) {
        const result = onDropEnd(text)
        if (result.status === 'success')
          wordRef.current!.style.backgroundColor = 'var(--success)'
        if (result.status === 'error')
          wordRef.current!.style.backgroundColor = 'var(--alert)'
        wordRef.current.style.cursor = 'initial'
      }
      if (droppable.current !== elemBelow) {
        wordRef.current!.style.transition = 'transform ease-in-out .3s, background-color ease-in-out .3s'
        setTimeout(() => {
          wordRef.current!.style.backgroundColor = 'initial'
          wordRef.current!.style.transform = `translate(0px, 0px)`;
        }, 0)
        wordRef.current.style.cursor = 'grab'
      }
      document.removeEventListener('mousemove', onMouseMove);
      wordRef.current!.removeEventListener('mouseup', onMouseUp);
    }
    wordRef.current.addEventListener('mouseup', onMouseUp)
  }
  useEffect(() => {
    if (!wordRef.current) return
    wordRef.current.ondragstart = () => false
    wordRef.current.addEventListener('mousedown', onMouseDown)
    if (solveStartService.isDragDisabled) { //Как мне уведомить осталиные элементы, что им мунжно поменять курсор
      wordRef.current!.style.cursor = 'initial'
    }
    return () => {
      wordRef.current!.removeEventListener('mousedown', onMouseDown);
    };
  }, [])



  return (
    <div ref={wordRef} className={styles.taskWord + ' no-select'}>
      {text}
    </div>
  )
}

export default DraggableWord