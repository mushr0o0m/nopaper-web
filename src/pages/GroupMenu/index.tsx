import React from 'react'
import styles from './styles/groupMenu.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import exerciseSelectors from '../Task/exercise.selectors'
import LevelMenuElement from './modules/LevelMenuElement'
import SetMenu from '../SetMenu'
import settingsAtom from '../Settings/settings.atom'
import settingsSelectors from '../Settings/settings.selectors'

const levelCharIndexByLevelId: Record<string, string> = {
  'first_level': 'A',
  'second_level': 'B'
}

const GroupMenu: React.FC = () => {
  const data = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)
  const progress = useRecoilValue(settingsSelectors.getUserProgress)
  const userData = useRecoilValue(settingsAtom)
  const { setId, levelId } = useParams()
  const setIds = useRecoilValue(exerciseSelectors.getSetIdsByLevelId(levelId))
  const navigate = useNavigate()

  const groups = data?.groups.filter((group) => group.set === setId) || []
  const tempSetIndex = setIds?.findIndex((e) => e === setId)
  // const progressCurrentSet = 

  const checkIsGroupAvalible = (prevGroupId) => {
    return Object.values(progress[prevGroupId]).filter(item => item === true).length >= 7
  }

  if (!setId) {
    navigate('/404')
    return null
  }
  return (
    <>
      {userData.user?.isGuest === false && <SetMenu />}
      <div className={styles.pageWrapper}>
        <section className={styles.wrapper}>
          {groups?.map((group, index, arr) => (
            <LevelMenuElement
              linkTo={`${group.id}/task`}
              key={group.id}
              colorIndex={index + 1}
              isLock={userData.user?.isGuest && group.premium}
              isActive={group.id === arr[0].id || checkIsGroupAvalible(arr[index - 1].id)}
              title={`${levelCharIndexByLevelId[levelId]}${index + 1 + 10 * tempSetIndex}`} 
              progress={progress[group.id]}
            />
          ))}
        </section>
      </div>
    </>
  )
}

export default GroupMenu
