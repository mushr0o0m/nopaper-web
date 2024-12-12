import React, { useEffect, useRef } from "react"
import styles from './styles/index.module.css'

export interface ModalProps {
  outsideModalHandler: () => void
  isOpen: boolean
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ outsideModalHandler, isOpen, children }) => {
  const ref = useRef<HTMLDivElement>()

  const onExit = (e: React.MouseEvent) => {
    const elemBelow = document.elementFromPoint(e.clientX, e.clientY)
    if(elemBelow === ref.current){
      outsideModalHandler()
      ref.current.classList.remove(styles.enabled)
      ref.current.classList.add(styles.disabled)
    }
  }

  useEffect(() => {
    if(isOpen){
      ref.current.classList.remove(styles.disabled)
        ref.current.classList.add(styles.enabled)
    }
  }, [isOpen])

  return (
    <div ref={ref} className={`${styles.container}`} onClick={(e) => onExit(e)}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal