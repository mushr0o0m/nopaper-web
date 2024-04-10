import { FC } from 'react';
import styles from './Button.module.css'

export interface ButtonProps {
  children: string,
  className?: string
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  ...props }) => {

  return (
    <button {...props} className={[styles.btn, className].join(' ')}>
      <svg width="194" height="78" viewBox="0 0 194 78" fill="none">
        <path d="M1 1L193 4.5L181.63 68.5L8.1726 77L1 1Z" stroke="#6B6C6F" strokeMiterlimit="10"
          strokeDasharray="2 2" />
        <text x='50%' y='70%' textAnchor="middle" fontSize='48px' fill="#6B6C6F">{children}</text>
      </svg>

    </button>
  );
};

export default Button;
