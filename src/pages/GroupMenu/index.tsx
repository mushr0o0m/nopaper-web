import React from 'react'
import styles from './styles/groupMenu.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import exerciseSelectors from '../Task/exercise.selectors'
import LevelMenuElement from './modules/LevelMenuElement'
import SetMenu from '../SetMenu'
import settingsAtom from '../Settings/settings.atom'
import settingsSelectors from '../Settings/settings.selectors'
import useSetGroups from '../Task/hooks/useSetGroups'

const levelCharIndexByLevelId: Record<string, string> = {
  'first_level': 'A',
  'second_level': 'B'
}

const GroupMenu: React.FC = () => {
  const progress = useRecoilValue(settingsSelectors.getProgressByGroups)
  const userData = useRecoilValue(settingsAtom)
  const { setId, levelId } = useParams()
  const setIds = useRecoilValue(exerciseSelectors.getSetIdsByLevelId(levelId))
  const navigate = useNavigate()
  const groups = useSetGroups(setId)
  const tempSetIndex = setIds?.findIndex((e) => e === setId)

//  console.log(progressByGroup)
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
              isActive={group.id === arr[0].id || progress[arr[index - 1].id].solvedTasks >= 7}
              title={`${levelCharIndexByLevelId[levelId]}${index + 1 + 10 * tempSetIndex}`} 
              progress={progress[group.id].progress}
            />
          ))}
        </section>
      </div>
    </>
  )
}

export default GroupMenu
