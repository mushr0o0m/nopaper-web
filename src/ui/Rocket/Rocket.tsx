import {FC} from 'react';
import styles from './Rocket.module.css'
import { RocketType } from '../../../utils/models/colorTypeEnum/rocket-type.enum';

export interface RocketProps {
    type: RocketType,
    outlined: boolean,
    active: boolean
}

const Rocket: FC<RocketProps> = ({type, outlined, active, ...props}) => {
    return (
        <div {...props} className={styles.rocket}>
            <div className={[styles.part, styles.contour, outlined ? styles.outlined : styles.visible, active ? styles.active : ''].join(' ')}
                 style={{maskImage: `url('/public/images/Shapes/rocket-${type}-outline.svg`,
                     WebkitMaskImage: `url('/public/images/Shapes/rocket-${type}-outline.svg`}}/>
            <img {...props} src={`/public/images/Shapes/rocket-${type}.svg`}
                 className={[styles.part, styles.shape, outlined ? styles.outlined : styles.visible].join(' ')}
                 alt=''/>
        </div>
    );
};

export default Rocket;
