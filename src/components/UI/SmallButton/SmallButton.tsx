import {FC} from 'react';
import './SmallButton.css'

export interface ButtonProps {
    children: string,
    className?: string,
    isColored: boolean
}

const Button: FC<ButtonProps> = ({
                    children,
                    className,
                    isColored,
                    ...props}) => {

    const rootClasses = ['btn', 'btn-small', className];
    if (isColored) {
        rootClasses.push('btn-colored');
    }

    return (
        <button {...props} className={rootClasses.join(' ')}>
            <svg width="162" height="63" viewBox="0 0 162 63" fill="none" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M6 3.99999L146 0.869873L160.5 55.5L1.5 61.5L6 3.99999Z" fill={isColored ? '#6AB37A' : ''}/>
                <path d="M6 3.99999L146 0.869873L160.5 55.5L1.5 61.5L6 3.99999Z"
                      stroke={isColored ? '#6AB27A' : '#6B6C6F'} strokeMiterlimit="10" strokeDasharray="2 2"/>
                <path d="M6 3.99999L146 0.869873L160.5 55.5L1.5 61.5L6 3.99999Z" stroke="url(#pattern0)"
                      strokeMiterlimit="10" strokeDasharray="2 2"/>

                <text x='20%' y='70%' fill={isColored ? '#EDEDEE' : '#6B6C6F'} className='btn-label'>{children}</text>
            </svg>
        </button>
    );
};

export default Button;
