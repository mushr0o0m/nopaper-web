import {ColorType} from "../../Types/color-type.enum.ts";
import {FC} from "react";
import './SoundReplay.css'

export interface SoundReplayProps {
    color: ColorType,
}

const SoundReplay: FC<SoundReplayProps> = ({color, ...props}) => {
    return (
        <button {...props} className='replay--btn' >
            <img src={color} className='replay--texture' alt='' style={{width: '68px', height: '52px', objectFit: 'cover'}}/>
        </button>
    );
};

export default SoundReplay;
