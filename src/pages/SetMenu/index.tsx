import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FirstLevelMenu, { FirstLevelMenuProps } from './components/FirstLevelMenu/FirstLevelMenu'
import { useRecoilValue } from 'recoil'
import exerciseSelectors from '../Task/exercise.selectors'
import styles from './setMenu.module.css'

const SetMenu: React.FC = () => {
  const data = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)
  const rocketsRef = useRef<HTMLDivElement>(null);
  const { levelId } = useParams()
  const navigate = useNavigate()

  const setMenuById = new Map([
    ['first_level', (props: FirstLevelMenuProps) => <FirstLevelMenu {...props} />],
  ])

  if (!levelId) {
    navigate('/404')
    return null
  }
  const setIds = data?.sets.filter((set) => set.level === levelId).map((set) => set.id) || []

  const handleWheel = (event: React.WheelEvent) => {
    if (rocketsRef.current) {
      rocketsRef.current.scrollLeft += event.deltaY
    }
  }

  return (
    <div className={styles.sheet} ref={rocketsRef} onWheel={handleWheel}>
      {setMenuById.get(levelId)({setIds: setIds, tempSetId: setIds[0], styles:styles, levelId: levelId})}
    </div>
  )
}

export default SetMenu
