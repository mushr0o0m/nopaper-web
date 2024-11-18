import Rocket from '@/shared/Rocket'
import React, { useState } from 'react'

export interface FirstLevelMenuProps {
  setIds: string[]
  tempSetId: string
  styles: CSSModuleClasses
  levelId: string
}

const FirstLevelMenu: React.FC<FirstLevelMenuProps> = ({ setIds, tempSetId, styles, levelId }) => {
  const [open, setOpen] = useState(false)
  const tempSetIndex = setIds.findIndex((e) => e === tempSetId)

  return (
    <div className={styles.rockets} data-open={open}>
      {setIds.map((id, index) => (
        <Rocket
          key={id}
          type={index + 1 + 5 * Number(index !== tempSetIndex)}
          active={index === tempSetIndex + 1}
          linkTo={`/level-menu/${levelId}/set-menu/${id}/group-menu`}
        />
      ))}
      <div onClick={() => setOpen((prev) => !prev)}>Curtaint</div>
    </div>
  )
}

export default FirstLevelMenu
