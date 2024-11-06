import React from 'react'
import Rocket from '../../../../shared/Rocket/Rocket'

interface FirstLevelMenuProps {
  setIds: string[]
  tempSetId: string
}

const FirstLevelMenu: React.FC<FirstLevelMenuProps> = ({ setIds, tempSetId }) => {
  const tempSetIndex = setIds.findIndex((e) => e === tempSetId)

  return (
    <div className="rockets">
      {setIds.map((id, index) => (
        <Rocket
          key={id}
          type={index + 1}
          outlined={!(index === tempSetIndex)}
          active={index === tempSetIndex + 1}
          linkTo={`${id}/group-menu`}
        />
      ))}
    </div>
  )
}

export default FirstLevelMenu
