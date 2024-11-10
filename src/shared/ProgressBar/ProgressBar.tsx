import { FC } from 'react'
import styles from './ProgressBar.module.css'
import Dot, { LevelType } from '@/shared/Dot/Dot'

export type LevelInfo = {
  level: number
  status: LevelType
}

export interface ProgressBarProps {
  levels: LevelInfo[]
  className?: string
}

const ProgressBar: FC<ProgressBarProps> = ({ levels, className, ...props }) => {
  levels.sort((a, b) => a.level - b.level)

  return (
    <div {...props} className={[styles.bar, className ?? ''].join(' ')}>
      {levels.map(
        (level): JSX.Element => (
          <Dot dotType={level.status} key={level.level} />
        )
      )}
    </div>
  )
}

export default ProgressBar
