import { useRecoilState } from "recoil"
import settingsApi from "../settings.api"
import settingsAtom from "../settings.atom"
import { IUserProgress } from "../user.types"

const useSettingsMethods = () => {

  const [authData, setAuthData] = useRecoilState(settingsAtom)

  const loadUser = async (): Promise<void> => {
    const response = await settingsApi.getUserInfo()
    if (response.status === 'error') return
    setAuthData({ user: response.body })
  }

  const saveUserProgress = async (userProgress: IUserProgress): Promise<void> => {
    const tempApplicationState = authData.user.applicationState
    const response = await settingsApi.patchApplicationState(
      {
        ...tempApplicationState,
        progress: { ...tempApplicationState.progress, ...userProgress }
      }
    )
    if (response.status === 'error') return
    setAuthData({ user: response.body })
  }

  return {
    loadUser,
    saveUserProgress,
  }
}

export default useSettingsMethods