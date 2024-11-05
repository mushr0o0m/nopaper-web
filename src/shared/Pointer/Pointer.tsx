import { FC } from 'react'
import styles from './Pointer.module.css'
import { Link } from 'react-router-dom'
import { ColorType } from '@/models/colorTypeEnum/color-type.enum'

export interface PointerProps {
  color?: ColorType
  linkTo: string
}

const Pointer: FC<PointerProps> = ({ color = ColorType.Default, linkTo, ...props }) => {
  return (
    <Link to={linkTo} relative="path" {...props}>
      <img src={color} className={styles.pointer} style={{ width: '30px', height: '55px', objectFit: 'cover' }} />
    </Link>
  )
}

export default Pointer
