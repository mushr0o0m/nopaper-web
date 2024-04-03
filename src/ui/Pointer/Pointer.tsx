import {ColorType} from "../../utils/models/colorTypeEnum/color-type.enum.ts";
import {FC} from "react";
import './Pointer.css'

export interface PointerProps {
    color: ColorType,
}

const Pointer: FC<PointerProps> = ({color, ...props}) => {
    return (
        <a {...props}  >
            <img src={color} className='pointer--texture' alt='' style={{width: '30px', height: '55px', objectFit: 'cover'}} />
        </a>
    );
};

export default Pointer;
