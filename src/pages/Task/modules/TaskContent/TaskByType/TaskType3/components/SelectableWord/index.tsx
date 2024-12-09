/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import styles from '../../../../../../modules/Dnd/styles/index.module.css'
import { IDraggableWord } from "@/pages/Task/modules/Dnd/dnd.types";
import eventBus from "@/eventBus";
import solveStartService from "@/pages/Task/modules/Dnd/SolveTaskService";
import Lottie from "react-lottie-player";
import successLottie from '@/pages/Task/lottie/successBg.json'

const SelectableWord: React.FC<IDraggableWord> = ({ text, onDragEnd }) => {
  const wordRef = useRef<HTMLDivElement>(null)
  const [play, setPlay] = useState(false)

  const onMouseDown = useCallback(() => {
    if (!wordRef.current || solveStartService.isDragDisabled) return

    const result = onDragEnd(wordRef.current, text)
    wordRef.current.style.transition = 'scale ease-in-out .3s'
    if (result.status === 'error') {
      wordRef.current.style.backgroundColor = 'var(--alert)'
      wordRef.current.style.scale = '1.25'
      wordRef.current.classList.add(styles.taskWord__wrong)
    } else if (result.status === 'success') {
      wordRef.current.style.backgroundColor = 'var(--success)'
      wordRef.current.style.scale = '1.25'
      setPlay(true)
    }
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
  }, [])

  return (
    <div
      ref={wordRef}
      className={styles.taskWord + ' no-select'}
      draggable={false}
      style={{ cursor: 'pointer' }}
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
        animationData={successLottie} loop={false} />
    </div>
  )
}

export default SelectableWord