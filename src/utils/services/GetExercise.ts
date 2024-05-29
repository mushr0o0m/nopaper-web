import { AxiosResponse } from "axios";
import { IExercisePacks } from "../models";
import $api from "../http";
import { config } from "../config";

export const getExercisePacks = async (): Promise<AxiosResponse<IExercisePacks>> => {
  return $api.get<IExercisePacks>(`${config.API_URL}/api/v1/me/exercise_packs/`);
}