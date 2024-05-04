import { AxiosResponse } from "axios";

export const getPublicExercisePacks = async (): Promise<AxiosResponse<IUser>> => {
  return $api.get<IUser>(`${config.API_URL}/api/v1/me/`);
}