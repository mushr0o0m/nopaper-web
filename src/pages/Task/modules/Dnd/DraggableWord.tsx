/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from './styles/index.module.css'
import solveStartService from "./SolveTaskService";
import eventBus from "@/eventBus";
import { IDraggableWord } from "./dnd.types";
import successLottie from '@/pages/Task/lottie/successBg.json'
import Lottie from "react-lottie-player";

const DraggableWord: React.FC<IDraggableWord> = ({ text, onDragEnd }) => {
  const wordRef = useRef<HTMLDivElement>()
  const [play, setPlay] = useState(false)
  const onMouseDown = useCallback((onMouseDownEvent: MouseEvent) => {
    if (!wordRef.current || solveStartService.isDragDisabled) return

    const initMouseCoords = {
      x: onMouseDownEvent.clientX,
      y: onMouseDownEvent.clientY
    }

    wordRef.current!.style.transition = 'none'
    wordRef.current.style.cursor = 'grabbing'
    wordRef.current.style.backgroundColor = 'white'

    wordRef.current.style.zIndex = '1000'

    const moveAt = (pageX: number, pageY: number) => {
      wordRef.current!.style.translate =
        `${pageX - initMouseCoords.x}px ${pageY - initMouseCoords.y}px`
      wordRef.current.style.scale = '1.15'
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
          wordRef.current.style.transition = 'translate ease-in-out .3s, background-color ease-in-out .3s, cursor ease-in-out .3s'
          wordRef.current.style.backgroundColor = 'initial'
          wordRef.current.style.translate = `0px 0px`
          wordRef.current.style.scale = `1`
          wordRef.current.style.zIndex = '0'
          wordRef.current.style.cursor = 'grab'
        })
      } else {
        wordRef.current.style.cursor = 'initial'

        if (result.status === 'error') {
          wordRef.current.style.backgroundColor = 'var(--alert)'
          wordRef.current.classList.add(styles.taskWord__wrong)
        } else if (result.status === 'success') {
          setPlay(true)
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
      unsubOnTaskFinish()
      if (!wordRef.current) return
      wordRef.current.removeEventListener('mousedown', onMouseDown)
    }
  }, [text])


  return (
    <div
      ref={wordRef}
      className={styles.taskWord + ' no-select'}
      draggable={false}
    >
      {text.text}
      <Lottie
        play={play}
        style={{
          position: "absolute",
          bottom: '-100%',
          top: '-100%',
          right: '-100%',
          left: '-100%',
          pointerEvents: 'none'
        }}
        className="no-select"
        animationData={successLottie} loop={true} />
    </div>
  )
}

export default DraggableWord