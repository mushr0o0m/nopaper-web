import { AxiosResponse } from "axios";
import http from "../../services/http";
import config from "../../config";
import { IAvailableExercisePacksResponse, IPack } from "./exercise.types";

const getExercisePacks = async (exerciseId: string): Promise<AxiosResponse<Pick<IPack, 'publicDataJson'|'privateDataJson'>>> => {
  console.log(exerciseId)
  return http.get<Pick<IPack, 'publicDataJson'|'privateDataJson'>>(
    `${config.API_URL}/api/v1/me/exercise_packs/${exerciseId}/data`
  );
}

const getListAvailableExercisePacks = async (): Promise<AxiosResponse<IAvailableExercisePacksResponse>> => {
  return http.get<IAvailableExercisePacksResponse>(`${config.API_URL}/api/v1/me/exercise_packs/`);
}


const exerciseApi = { getExercisePacks, getListAvailableExercisePacks };

export default exerciseApi;
