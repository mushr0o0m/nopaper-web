import {ColorType} from "../../Types/color-type.enum.ts";
import {FC} from "react";
import styles from './Sound.module.css'

export interface SoundProps {
    color: ColorType,
}

const Sound: FC<SoundProps> = ({color, ...props}) => {
    return (
        <button {...props} className={styles.btn} >
            <img src={color} className={styles.texture} alt='' style={{width: '68px', height: '52px', objectFit: 'cover'}}/>
        </button>
    );
};

export default Sound;
