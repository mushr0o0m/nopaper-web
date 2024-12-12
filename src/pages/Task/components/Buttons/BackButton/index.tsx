import React from "react"
import Btn from '@/assets/svg/buttons/pointer-shape.svg?react'
import styles from '../styles/index.module.css'

interface BackBtnProps{
  color: number
  onClick?: () => void
}

const BackBtn: React.FC<BackBtnProps> = ({color, onClick}) => {

  return(
    <button onClick={onClick} className={styles.btn}>
      <Btn className={styles.btn__svg} color={`var(--level-${color})`}/>
    </button>
  )
}

export default BackBtn