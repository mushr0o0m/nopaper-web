import { FC } from 'react';
import styles from './ButtonDotted.module.css'

export interface ButtonDottedProps {
    children: string,
    className?: string
}

const ButtonDotted: FC<ButtonDottedProps> = ({
    children,
    className,
    ...props }) => {

    return (
        <button {...props} className={[styles.btn, className].join(' ')}>
            {children}
        </button>
    );
};

export default ButtonDotted;
