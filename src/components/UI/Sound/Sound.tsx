import {ColorType} from "../../Types/color-type.enum.ts";
import {FC} from "react";
import './Sound.css'

export interface SoundProps {
    color: ColorType,
}

const Sound: FC<SoundProps> = ({color, ...props}) => {
    return (
        <button {...props} className='sound--btn' >
            <img src={color} className='sound--texture' alt='' style={{width: '68px', height: '52px', objectFit: 'cover'}}/>
        </button>
    );
};

export default Sound;
