import React from 'react'
import styles from './styles/groupMenu.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import exerciseSelectors from '../Task/exercise.selectors'
import LevelMenuElement from './modules/LevelMenuElement/LevelMenuElement'
import SetMenu from '../SetMenu'

const levelCharIndexByLevelId: Record<string, string> = {
  'first_level': 'A',
  'second_level': 'B'
}

const GroupMenu: React.FC = () => {
  const data = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)
  const { setId, levelId } = useParams()
  const setIds = useRecoilValue(exerciseSelectors.getSetIdsByLevelId(levelId))
  const navigate = useNavigate()

  const groupIds = data?.groups.filter((group) => group.set === setId).map((group) => group.id) || []
  const tempSetIndex = setIds?.findIndex((e) => e === setId)
  
  if (!setId) {
    navigate('/404')
    return null
  }

  return (
    <>
      <SetMenu />
      <div className={styles.pageWrapper}>
        <section className={styles.wrapper}>
          {groupIds.map((id, index) => (
            <LevelMenuElement
              linkTo={`${id}/task`}
              key={id}
              colorIndex={index + 1}
              isOn={true}
              title={`${levelCharIndexByLevelId[levelId]}${index + 1 + 10 * tempSetIndex}`} />
          ))}
        </section>
      </div>
    </>
  )
}

export default GroupMenu
