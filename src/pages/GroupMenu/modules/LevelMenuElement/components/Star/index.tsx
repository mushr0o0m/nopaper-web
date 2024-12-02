import { FC } from 'react'
import StarVector from '@/assets/svg/star/star.svg?react'
import FaceOn from '@/assets/svg/star/faceOn.svg?react'
import FaceOff from '@/assets/svg/star/faceOff.svg?react'
import Lock from '@/assets/svg/star/lock.svg?react'
import styles from './styles/index.module.css'
import cn from '@/utils/cn'

export interface StarProps {
  color: number
  isOn?: boolean
  isLock?: boolean
}
const Star: FC<StarProps> = ({ color, isOn = true, isLock = false }) => {
  return (
    <div className={styles.starСontainer}>
      <span className={cn({ [styles.starСontainer_off]: !isOn })}>
        <StarVector className={styles.star__starVector} color={`var(--level-${color})`} />
        <span className={styles.star__face}>{isOn ? <FaceOn /> : <FaceOff />}</span>
      </span>
      {isLock && <Lock className={styles.lock} />}
    </div>
  )
}

export default Star
