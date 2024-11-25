import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import exerciseSelectors from '../Task/exercise.selectors'
import styles from './setMenu.module.css'
import Rocket from './components/Rocket'
import Book from './components/Book'
import { LevelIconProps } from './setMenu.types'

const levelIconByLevelId: Record<string, React.FC<LevelIconProps>> = {
  'first_level': Rocket,
  'second_level': Book,
}

const SetMenu: React.FC = () => {
  const data = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)
  const ref = useRef<HTMLDivElement>(null);
  const { levelId, setId } = useParams()
  const navigate = useNavigate()

  if (!levelId) {
    navigate('/404')
    return null
  }
  const setIds = data?.sets.filter((set) => set.level === levelId).map((set) => set.id) || []
  const tempSetIndex = setIds.findIndex((e) => e === setId)
  
  const LevelIcon = levelIconByLevelId[levelId]

  const handleWheel = (event: React.WheelEvent) => {
    if (ref.current) {
      ref.current.scrollLeft += event.deltaY
    }
  }

  return (
    <div className={styles.sheet} >
      <div className={styles.levelIcons} ref={ref} onWheel={handleWheel}>
        {setIds.map((id, index) => (
          <LevelIcon
            key={id}
            type={index + setIds.length * Number(index !== tempSetIndex)}
            tempSetIndex={index}
            // active={index === tempSetIndex + 1}
            linkTo={`/level-menu/${levelId}/set-menu/${id}/group-menu`}
          />
        ))}
      </div>
    </div>
  )
}

export default SetMenu
