import { FC, MouseEventHandler } from 'react'
import styles from './button.module.css'
import { Link } from 'react-router-dom'

export interface ButtonBaseProps {
  children: string
  className?: string
  isDisable?: boolean
}

interface ButtonLinkProps extends ButtonBaseProps {
  linkTo: string
}

interface ButtonOnClickProps extends ButtonBaseProps {
  onClick: MouseEventHandler<HTMLAnchorElement>
}

type ButtonProps = ButtonLinkProps | ButtonOnClickProps

const Button: FC<ButtonProps> = (props) => {
  return (
    <Link
      to={'linkTo' in props ? props.linkTo : undefined}
      className={[styles.btn, props.className, props.isDisable === true ? styles.disabled : ''].join(' ')}
      onClick={'onClick' in props ? props.onClick : undefined}
    >
      <svg width="230px" height="78" fill="none">
        <path d="M1 1L220 5L210 69L8 77L1 1Z" stroke="#6B6C6F" strokeMiterlimit="10" strokeDasharray="9 8" />
        <text x="50%" y="70%" textAnchor="middle" fontSize="48px" fill="#6B6C6F">
          {props.children}
        </text>
      </svg>
    </Link>
  )
}

export default Button
