import { FC } from 'react';
import styles from './Rocket.module.css'
import { RocketType } from '../../utils/models/colorTypeEnum/rocket-type.enum';
import { Link } from 'react-router-dom';

interface RocketProps {
  type: RocketType,
  outlined: boolean,
  active: boolean,
  linkTo: string,
}

const Rocket: FC<RocketProps> = ({ type, outlined, active, linkTo, ...props }) => {
  return (
    <Link to={linkTo} className={styles.rocket} 
    style={{
      pointerEvents: !outlined && !active || active ? 'auto' : 'none'
    }}>
      <div className={[styles.part, styles.contour, outlined ? styles.outlined : styles.visible, active ? styles.active : ''].join(' ')}
        style={{
          maskImage: `url('/public/images/Shapes/rocket-${type}-outline.svg`,
          WebkitMaskImage: `url('/public/images/Shapes/rocket-${type}-outline.svg`
        }} />
      <img {...props} src={`/public/images/Shapes/rocket-${type}.svg`}
        className={[styles.part, styles.shape, outlined ? styles.outlined : styles.visible].join(' ')}
        alt='' />
    </Link>
  );
};

export default Rocket;
