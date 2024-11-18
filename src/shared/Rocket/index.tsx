import { FC } from 'react'
import styles from './Rocket.module.css'
import { Link } from 'react-router-dom'
import Rocket1 from '@/assets/svg/firstLevelMenu/rocket-1.svg?react'
import Rocket2 from '@/assets/svg/firstLevelMenu/rocket-2.svg?react'
import Rocket3 from '@/assets/svg/firstLevelMenu/rocket-3.svg?react'
import Rocket4 from '@/assets/svg/firstLevelMenu/rocket-4.svg?react'
import Rocket5 from '@/assets/svg/firstLevelMenu/rocket-5.svg?react'
import RocketOutline1 from '@/assets/svg/firstLevelMenu/rocket-1-outline.svg?react'
import RocketOutline2 from '@/assets/svg/firstLevelMenu/rocket-2-outline.svg?react'
import RocketOutline3 from '@/assets/svg/firstLevelMenu/rocket-3-outline.svg?react'
import RocketOutline4 from '@/assets/svg/firstLevelMenu/rocket-4-outline.svg?react'
import RocketOutline5 from '@/assets/svg/firstLevelMenu/rocket-5-outline.svg?react'

interface RocketProps {
  type: number
  active: boolean
  linkTo: string
}

const levelIconByType: Record<number, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  1: Rocket1,
  2: Rocket2,
  3: Rocket3,
  4: Rocket4,
  5: Rocket5,
  6: RocketOutline1,
  7: RocketOutline2,
  8: RocketOutline3,
  9: RocketOutline4,
  10: RocketOutline5,
}

const Rocket: FC<RocketProps> = ({ type, active, linkTo }) => {
  const Rocket = levelIconByType[type]

  return (
    <Link
      to={linkTo}
      className={styles.rocket}
      style={{
        pointerEvents: (type <= 5 && !active) || active ? 'auto' : 'none',
      }}
    >
      <Rocket style={{ color: `${active ? 'var(--success)' : `var(--light-grey)`}` }} />
      {levelIconByType[type]({ style: { color: `${active ? 'var(--success)' : `var(--light-grey)`}` } })}
    </Link>
  )
}

export default Rocket
