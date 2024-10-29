import http from '../../services/http'
import config from '../../config'
import { IAvailableExercisePacksResponse, IPack } from './exercise.types'
import { handleHttpError, handleHttpResponse } from '../../services/http/http.utils.ts'
import { HTTPResponse } from '../../services/http/http.types.ts'

const getExercisePackData = async (
  packId: IPack['id']
): Promise<HTTPResponse<Pick<IPack, 'publicDataJson' | 'privateDataJson'>>> => {
  return http
    .get<Pick<IPack, 'publicDataJson' | 'privateDataJson'>>(`${config.API_URL}/api/v1/me/exercise_packs/${packId}/data`)
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const getListAvailableExercisePacks = async (): Promise<HTTPResponse<IAvailableExercisePacksResponse>> => {
  return http
    .get<IAvailableExercisePacksResponse>(`${config.API_URL}/api/v1/me/exercise_packs/`)
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const exerciseApi = { getExercisePackData, getListAvailableExercisePacks }

export default exerciseApi
