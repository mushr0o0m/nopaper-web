import React, { useEffect, useState } from 'react'
import styles from './styles/groupMenu.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import LevelMenuElement from './modules/LevelMenuElement/LevelMenuElement'
import { useRecoilValue } from 'recoil'
import exerciseSelectors from '../Task/exercise.selectors'

const GroupMenu: React.FC = () => {
  const data = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)
  const { setId } = useParams()
  const navigate = useNavigate()
  const [groupIds, setGroupIds] = useState<string[]>([])
  
  useEffect(() => {
    if(data)
      setGroupIds( data.groups.filter((group) => group.set === setId).map((group) => group.id) || [])

  }, [data])

  if (!setId) {
    navigate('/404')
    return null
  }

  return (
    <div className="container">
      {[0, 5].map((n) => (
        <section key={n} className={styles.levelSection}>
          {groupIds.slice(n, n + 5).map((id, index) => (
            <LevelMenuElement
              linkTo={`${id}/task`}
              key={id}
              colorIndex={index + 1 + n}
              isOn={true}
              index={index + 1 + n}
            />
          ))}
        </section>
      ))}
    </div>
  )
}

export default GroupMenu
