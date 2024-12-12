import {  FC, MouseEventHandler, useLayoutEffect, useRef, useState } from 'react'
import styles from './button.module.css'
import { Link } from 'react-router-dom'

export interface ButtonBaseProps {
  children: React.ReactNode
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

const polygonPoints = [
  [[4, 1], [182, 8], [173, 85], [1, 85], [4, 1]],
  [[1, 10], [182, 1], [173, 85], [5, 78], [1, 10]],
  [[6, 4], [161, 1], [179, 86], [4, 82], [6, 4]],
  [[1, 7], [170, 2], [184, 88], [6, 82], [1, 7]],
  [[15, 11], [160, 3], [186, 84], [1, 80], [15, 11]],
  [[17, 1], [172, 12], [188, 77], [2, 88], [17, 1]],
  [[24, 8], [180, 2], [180, 76], [1, 81], [24, 8]],
  [[20, 4], [188, 1], [176, 87], [1, 82], [20, 4]]
]

const Button: FC<ButtonProps> = (props) => {

  const ref = useRef<HTMLDivElement>()
  const [width, setWidth] = useState(0)
  const points = useRef(polygonPoints[Math.floor(Math.random() * polygonPoints.length)])
  
  useLayoutEffect(() => {
    const { width } = ref.current.getBoundingClientRect()
    setWidth(Math.floor(width + (width / 2 > 100 ? 100 : width / 2)))
  }, [width])


  return (
    <Link
      to={'linkTo' in props ? props.linkTo : undefined}
      className={[styles.btn, props.className, props.isDisable === true ? styles.disabled : ''].join(' ')}
      onClick={'onClick' in props ? props.onClick : undefined}

    >
      <svg width={`${width + 1}px`} height='88px' fill='none'>
        <polygon
          points={`${points.current[0].join(',')} ${[width, points.current[1][1]].join(',')} ${[width - Math.abs(points.current[1][0] - points.current[2][0]), points.current[2][1]]} ${points.current[3].join(',')} ${points.current[4].join(',')}`}
          stroke='#6B6C6F' strokeMiterlimit='10' strokeDasharray='9 8' 
        />
        <foreignObject x='0' y='0' width={`${width}px`} height='85px'>
          <div className={styles.word}>
            <span ref={ref} className={styles.word__text}>{props.children}</span>
          </div>
        </foreignObject>
      </svg>
    </Link>
  )
}

export default Button
