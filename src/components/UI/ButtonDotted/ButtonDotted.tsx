import {FC} from 'react';
import styles from './ButtonDotted.module.css'

export interface ButtonProps {
    children: string,
    className?: string
}

const Button: FC<ButtonProps> = ({
                                     children,
                                     className,
                                     ...props}) => {

    return (
        <button {...props} className={[styles.btn, className].join(' ')}>
            {children}
        </button>
    );
};

export default Button;
