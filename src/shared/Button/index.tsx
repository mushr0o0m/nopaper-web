import { FC } from 'react'
import styles from './button.module.css'
import { Link } from 'react-router-dom'

export interface ButtonProps {
  children: string
  linkTo: string
  className?: string
  loading?: boolean
}

const Button: FC<ButtonProps> = ({ children, className, linkTo, ...props }) => {
  return (
    <Link to={linkTo} {...props} className={[styles.btn, className].join(' ')}>
      <svg width="194" height="78" viewBox="0 0 194 78" fill="none">
        <path
          d="M1 1L193 4.5L181.63 68.5L8.1726 77L1 1Z"
          stroke="#6B6C6F"
          strokeMiterlimit="10"
          strokeDasharray="2 2"
        />
        {props.loading ? (
          <text>Загрзука...</text>
        ) : (
          <text x="50%" y="70%" textAnchor="middle" fontSize="48px" fill="#6B6C6F">
            {children}
          </text>
        )}
      </svg>
    </Link>
  )
}

export default Button
