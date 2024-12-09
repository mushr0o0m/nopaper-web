import $api from '../../services/http'
import config from '@/config'
import { HTTPResponse } from '@/services/http/http.types'
import { handleHttpError, handleHttpResponse } from '@/services/http/http.utils'
import { IApplicationState, IUser } from './user.types'


const getUserInfo = async (): Promise<HTTPResponse<IUser>> => {
  return $api.get<IUser>(`${config.API_URL}/api/v1/me/`).then(handleHttpResponse).catch(handleHttpError)
}

const patchApplicationState = async (applicationState: IApplicationState): Promise<HTTPResponse<IUser>> => {
  return $api.patch<IUser>(
    `${config.API_URL}/api/v1/me/`,
    { applicationState: applicationState }
  )
  .then(handleHttpResponse)
  .catch(handleHttpError)
}

const settingsApi = { getUserInfo, patchApplicationState }

export default settingsApi
