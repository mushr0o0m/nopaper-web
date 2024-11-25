import { useSetRecoilState } from "recoil"
import settingsApi from "../settings.api"
import settingsAtom from "../settings.atom"

const useSettingsMethods = () => {

  const setAuthData = useSetRecoilState(settingsAtom)

  const loadUser = async (): Promise<void> => {
    const response = await settingsApi.getUserInfo()
    if (response.status === 'error') return
    setAuthData({ user: response.body })
  }

  return {
    loadUser,
  }
}

export default useSettingsMethods