import { FC } from 'react';
import styles from './rocket.module.css'
import { Link } from 'react-router-dom';
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
import { LevelIconProps } from '../../setMenu.types';

const levelIconByType: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[] = [
  Rocket1,
  Rocket2,
  Rocket3,
  Rocket4,
  Rocket5,
]

const levelIconOutlineByType: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[] = [
  RocketOutline1,
  RocketOutline2,
  RocketOutline3,
  RocketOutline4,
  RocketOutline5,
]
const Rocket: FC<LevelIconProps> = ({ index, isTempSet, isFinished, linkTo, isAvilable }) => {

  const Rocket = levelIconByType[index]
  const OutlineRocket = levelIconOutlineByType[index]
  return (
    <Link to={linkTo} className={styles.rocket}
    style={{
      pointerEvents: isAvilable ? 'auto' : 'none'
    }}>
      {isFinished && <Rocket style={{position: 'absolute'}} />} 
      <OutlineRocket style={{position: 'relative', color: `${isTempSet ? 'var(--success)' : `var(--light-grey)`}`}}/>
    </Link>
    
  );
};

export default Rocket;
{/* <Link to={linkTo} className={styles.rocket}
      style={{
        pointerEvents: (type <= levelIconByType.length / 2) && !active || active ? 'auto' : 'none'
      }}>
      <Rocket style={{  }} />
    </Link> */}