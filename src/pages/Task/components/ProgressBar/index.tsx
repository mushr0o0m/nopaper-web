import { FC } from 'react'
import styles from './styles/index.module.css'
import { IUserProgress } from '@/pages/Settings/user.types'
import Dot from '@/assets/svg/progressBar/dot.svg?react'
import colorByProgress from '@/utils/colorByProgress'
import cn from '@/utils/cn'

interface ProgressBarProps {
  progress: IUserProgress
  currentTaskIndex: number
  className?: string
}

const ProgressBar: FC<ProgressBarProps> = ({ progress, currentTaskIndex, className = '' }) => {
  return (
    <div className={cn(styles.bar, className)}>
      {Object.values(progress).map((item, index) => (
        <span key={index} className={styles.dotContainer}>
          <Dot
            className={styles.dot}
            style={{
              color: `var(${index === currentTaskIndex ? '--beige-bg' : colorByProgress(item)})`,
            }}
          />
          {index === currentTaskIndex && <Dot className={styles.dot_xl} />}
        </span>
      ))}
    </div>
  )
}

export default ProgressBar
