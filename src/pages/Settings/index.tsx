import React from "react"
import { useRecoilValue } from "recoil"
import settingsAtom from "./settings.atom"

const Settings: React.FC = () => {
  const userData = useRecoilValue(settingsAtom)
  return (
    <div>
      {userData.user && Object.keys(userData.user).map((key, index) => {
        if(key !== 'applicationState')
          return <p key={index}>{key} - {userData.user[key]}</p>
      })}
      <div>
      {userData.user.applicationState && Object.keys(userData.user.applicationState.progress).map((key, index) => (
        <p key={index}>{key} - {`${userData.user.applicationState.progress[key]}`}</p>
      ))}
      </div>
    </div>
  )
}

export default Settings