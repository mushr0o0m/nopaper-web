import React from 'react'
import style from './styles/levelMenuElement.module.css'
import Star from './components/Star'
import { IUserProgress } from '@/pages/Settings/user.types'
import ScoreBar from './components/ScoreBar'

interface LevelMenuElementProps {
  title: string
  colorIndex: number
  progress?: IUserProgress
  isActive: boolean
  isLock: boolean
  levelMenuElHandle: () => void
}

const LevelMenuElement: React.FC<LevelMenuElementProps> = ({
  colorIndex,
  isActive,
  isLock,
  title,
  progress,
  levelMenuElHandle
}) => {
  const isScoreBarIsOn = progress ? Object.values(progress).filter(v => v !== null).length > 0 : false

  return (
    <button
      onClick={levelMenuElHandle}
      className={`${style.levelElement} btnReset`}
      style={{
        pointerEvents: isActive ? 'auto' : 'none'
      }}
    >
      <h3 className={style.indexTitle} style={{ opacity: isActive ? '1' : '0.5' }}>{title}</h3>
      <Star color={colorIndex} isOn={isActive} isLock={isLock} />
      {isScoreBarIsOn && <ScoreBar groupProgress={progress} />}
    </button>
  )
}

export default LevelMenuElement
