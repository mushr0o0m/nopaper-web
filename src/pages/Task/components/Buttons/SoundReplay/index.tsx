import React from "react"
import styles from '../styles/index.module.css'
import Btn from '@/assets/svg/buttons/sound-replay.svg?react'

interface SoundReplayProps {
  color: number
  onClick?: () => void
}

const SoundReplay: React.FC<SoundReplayProps> = ({ color, onClick }) => {

  return (
    <button onClick={onClick} className={styles.btn}>
      <Btn className={styles.btn__svg} color={`var(--level-${color})`}/>
    </button>
  )
}

export default SoundReplay
