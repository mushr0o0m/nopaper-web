import $api from '../../services/http'
import config from '@/config'
import { HTTPResponse } from '@/services/http/http.types'
import { IUser } from '@/pages/Authorization/auth.types'
import { handleHttpError, handleHttpResponse } from '@/services/http/http.utils'


const getUserInfo = async (): Promise<HTTPResponse<IUser>> => {
  return $api.get<IUser>(`${config.API_URL}/api/v1/me/`).then(handleHttpResponse).catch(handleHttpError)
}

const settingsApi = { getUserInfo }

export default settingsApi
