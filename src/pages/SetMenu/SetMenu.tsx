import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FirstLevelMenu from './components/FirstLevelMenu/FirstLevelMenu'
import { useRecoilValue } from 'recoil'
import exerciseSelectors from '../../recoil/exercise/exercise.selectors.ts'

const SetMenu: React.FC = () => {
  const data = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)
  const { levelId } = useParams()
  const navigate = useNavigate()

  const setMenuById = new Map([['first_level', FirstLevelMenu]])

  if (!levelId) {
    navigate('/404')
    return null
  }

  const setIds = data.sets.filter((set) => set.level === levelId).map((set) => set.id) || []

  const MenuComponent = setMenuById.get(levelId)

  if (!MenuComponent) {
    navigate('/404')
    return null
  }

  return (
    <div className="container">
      <MenuComponent setIds={setIds} tempSetId={setIds[0]} />
    </div>
  )
}

export default SetMenu
