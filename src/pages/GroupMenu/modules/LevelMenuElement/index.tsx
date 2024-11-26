import React from 'react'
import style from './styles/levelMenuElement.module.css'
import { Link } from 'react-router-dom'
import ScoreBar from '../../../../shared/ScoreBar/ScoreBar'
import Star from './components/Star'
import { IUserProgress } from '@/pages/Settings/user.types'

interface LevelMenuElementProps {
  colorIndex: number
  linkTo: string
  title: string
  isActive: boolean
  isLock: boolean
  progress: IUserProgress
  isScoreBarIsOn?: boolean
}

const LevelMenuElement: React.FC<LevelMenuElementProps> = ({
  colorIndex,
  linkTo,
  isActive,
  isLock,
  title,
  progress,
  isScoreBarIsOn = true,
}) => {
  return (
    <Link
      to={linkTo}
      className={style.levelElement}
      style={{
        pointerEvents: isActive ? 'auto' : 'none',
        opacity: isActive ? '1' : '0.5',
        backgroundColor: isLock ? 'red' : 'none'
      }}
    >
      <h3 className={style.indexTitle}>{title}</h3>
      <Star color={colorIndex} isOn={isActive} />
      {isScoreBarIsOn && <ScoreBar groupProgress={progress} />}
    </Link>
  )
}

export default LevelMenuElement
