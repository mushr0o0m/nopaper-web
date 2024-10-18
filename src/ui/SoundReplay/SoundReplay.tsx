import {ColorType} from "../../models/colorTypeEnum/color-type.enum.ts";
import {FC} from "react";
import styles from './SoundReplay.module.css'

export interface SoundReplayProps {
    color: ColorType,
}

const SoundReplay: FC<SoundReplayProps> = ({color, ...props}) => {
    return (
        <button {...props} className={styles.btn} >
            <img src={color} className={styles.texture} alt='' style={{width: '68px', height: '52px', objectFit: 'cover'}}/>
        </button>
    );
};

export default SoundReplay;
