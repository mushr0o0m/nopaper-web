import { FC, MouseEventHandler } from 'react';
import styles from './button.module.css'
import { Link } from 'react-router-dom';

export interface ButtonBaseProps {
  children: string
  className?: string
  isDisable?: boolean
}

interface ButtonLinkProps extends ButtonBaseProps {
  linkTo: string
  onClick?: never
}

interface ButtonOnClickProps extends ButtonBaseProps {
  linkTo?: never
  onClick: MouseEventHandler<HTMLAnchorElement>
}

type ButtonProps = ButtonLinkProps | ButtonOnClickProps;

const Button: FC<ButtonProps> = ({
  children,
  className,
  linkTo,
  onClick,
  isDisable = false }) => {

  return (
    <Link to={linkTo} className={[styles.btn, className, isDisable ? styles.disabled : ''].join(' ')} onClick={onClick}>
      <svg width="230px" height="78" fill="none">
        <path d="M1 1L220 5L210 69L8 77L1 1Z" stroke="#6B6C6F" strokeMiterlimit="10"
          strokeDasharray="9 8" />
        <text x='50%' y='70%' textAnchor='middle' fontSize='48px' fill="#6B6C6F">{children}</text>
      </svg>

    </Link >
  );
};

export default Button;
