/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react";
import styles from './styles/index.module.css'
import solveStartService from "./SolveTaskService";
import eventBus from "@/eventBus";
import { ITextOption } from "../../exercise.types";

interface IDraggableWord {
  text: ITextOption
  onDragEnd: (el: Element | null, wordText: ITextOption) => { status: 'success' | 'error' | 'isBlank' }
}

const DraggableWord: React.FC<IDraggableWord> = ({ text, onDragEnd }) => {
  const wordRef = useRef<HTMLDivElement>(null);

  const onMouseDown = useCallback((onMouseDownEvent: MouseEvent) => {
    if (!wordRef.current || solveStartService.isDragDisabled) return

    const initMouseCoords = {
      x: onMouseDownEvent.clientX,
      y: onMouseDownEvent.clientY
    }

    wordRef.current!.style.transition = 'none'
    wordRef.current.style.cursor = 'grabbing'
    wordRef.current.style.backgroundColor = 'white'
    wordRef.current.style.transform = 'scale(1.15)'
    wordRef.current.style.zIndex = '1000'

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
      
      const result = onDragEnd(elemBelow, text)
      
      if (result.status === 'isBlank') {
        requestAnimationFrame(() => {
          wordRef.current.style.transition = 'transform ease-in-out .3s, background-color ease-in-out .3s, cursor ease-in-out .3s'
          wordRef.current.style.backgroundColor = 'initial'
          wordRef.current.style.transform = `translate(0px, 0px)`
          wordRef.current.style.zIndex = '0'
          wordRef.current.style.cursor = 'grab'
        })
      } else {
        wordRef.current.style.cursor = 'initial'

        if (result.status === 'error') {
          wordRef.current.style.backgroundColor = 'var(--alert)'
        } else if (result.status === 'success') {
          wordRef.current.style.backgroundColor = 'var(--success)'
        }
      }
      
      document.removeEventListener('mousemove', onMouseMove);
      wordRef.current.removeEventListener('mouseup', onMouseUp);
    }

    wordRef.current.addEventListener('mouseup', onMouseUp)
  }, [])

  useEffect(() => {
    if (!wordRef.current) return

    const unsubOnTaskFinish = eventBus.on('onTaskFinish', () => {
      wordRef.current.style.cursor = 'initial'
    })
    wordRef.current.addEventListener('mousedown', onMouseDown)

    return () => {
      wordRef.current?.removeEventListener('mousedown', onMouseDown)
      unsubOnTaskFinish()
    };
  }, [])


  return (
    <div
      ref={wordRef}
      className={styles.taskWord + ' no-select'}
      draggable={false}
    >
      {text.text}
    </div>
  )
}

export default DraggableWord