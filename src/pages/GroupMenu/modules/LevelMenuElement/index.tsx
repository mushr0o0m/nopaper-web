import React from 'react'
import style from './styles/levelMenuElement.module.css'
import { Link } from 'react-router-dom'
import Star from './components/Star'
import { IUserProgress } from '@/pages/Settings/user.types'
import ScoreBar from './components/ScoreBar'

interface LevelMenuElementProps {
  linkTo: string
  title: string
  colorIndex: number
  progress?: IUserProgress
  isActive: boolean
  isLock: boolean
}

const LevelMenuElement: React.FC<LevelMenuElementProps> = ({
  colorIndex,
  linkTo,
  isActive,
  isLock,
  title,
  progress,
}) => {
  const isScoreBarIsOn = progress ? Object.values(progress).filter(v => v !== null).length > 0 : false

  return (
    <Link
      to={linkTo}
      className={style.levelElement}
      style={{
        pointerEvents: isActive ? 'auto' : 'none'
      }}
    >
      <h3 className={style.indexTitle} style={{opacity: isActive ? '1' : '0.5'}}>{title}</h3>
      <Star color={colorIndex} isOn={isActive} isLock={isLock} />
      {isScoreBarIsOn && <ScoreBar groupProgress={progress} />}
    </Link>
  )
}

export default LevelMenuElement
