import { FC } from 'react';
import styles from './Rocket.module.css'
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

interface RocketProps {
  type: number,
  active: boolean,
  linkTo: string,
}

const Rocket: FC<RocketProps> = ({ type, active, linkTo }) => {

  const levelIconByType = new Map([
    [1, (props?: React.SVGProps<SVGSVGElement>) => <Rocket1 {...props} />],
    [2, (props?: React.SVGProps<SVGSVGElement>) => <Rocket2 {...props} />],
    [3, (props?: React.SVGProps<SVGSVGElement>) => <Rocket3 {...props} />],
    [4, (props?: React.SVGProps<SVGSVGElement>) => <Rocket4 {...props} />],
    [5, (props?: React.SVGProps<SVGSVGElement>) => <Rocket5 {...props} />],
    [6, (props?: React.SVGProps<SVGSVGElement>) => <RocketOutline1 {...props} />],
    [7, (props?: React.SVGProps<SVGSVGElement>) => <RocketOutline2 {...props} />],
    [8, (props?: React.SVGProps<SVGSVGElement>) => <RocketOutline3 {...props} />],
    [9, (props?: React.SVGProps<SVGSVGElement>) => <RocketOutline4 {...props} />],
    [10, (props?: React.SVGProps<SVGSVGElement>) => <RocketOutline5 {...props} />]
  ])
  return (
    <Link to={linkTo} className={styles.rocket}
      style={{
        pointerEvents: (type <= 5) && !active || active ? 'auto' : 'none'
      }}>
      {levelIconByType.get(type)({style: {color: `${active ? 'var(--success)' : `var(--light-grey)`}`}})}
    </Link>
  );
};

export default Rocket;
