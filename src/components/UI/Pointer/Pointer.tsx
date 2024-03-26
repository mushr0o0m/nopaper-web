import {ColorType} from "../../Types/color-type.enum.ts";
import {FC} from "react";

export interface PointerProps {
    color: ColorType,
}

const Pointer: FC<PointerProps> = ({color, ...props}) => {
    return (
        <a {...props}>
            <svg width="30" height="55" viewBox="0 0 30 55" fill="none" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <path
                    d="M28.1599 0C28.1599 0 20.04 7.52 12.25 15.3C4.46 23.08 0 27.93 0 27.93C0 27.93 7.63995 35.93 13.5699 41.38C19.4999 46.83 28.8199 54.38 28.8199 54.38C28.8199 54.38 29.3499 40.85 29.0599 27.24C28.7399 11.54 28.1599 0 28.1599 0Z"
                    fill={color}/>
                <path
                    d="M28.1599 0C28.1599 0 20.04 7.52 12.25 15.3C4.46 23.08 0 27.93 0 27.93C0 27.93 7.63995 35.93 13.5699 41.38C19.4999 46.83 28.8199 54.38 28.8199 54.38C28.8199 54.38 29.3499 40.85 29.0599 27.24C28.7399 11.54 28.1599 0 28.1599 0Z"
                    fill="url(#pattern0)"/>
            </svg>

        </a>
    );
};

export default Pointer;
