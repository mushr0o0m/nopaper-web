import { AxiosError } from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import exerciseApi from "../exercise.api";
import { exerciseState } from "../exercise.atom";
import { IData } from "../exercise.types";
import { authState } from "../../auth/auth.atom";


export const useExercise = () => {
  const [exerciseData, setExerciseData] = useRecoilState(exerciseState) 
  const authData = useRecoilValue(authState)

  const fetchExercisePack = async () => {
    (true);
    exerciseApi.getListAvailableExercisePacks()
      .then(list => {
        setExerciseData(prev => ({...prev, exercisePackId: list.data.results[0].id}))
        return list.data.results[0].id
      })
      .then((id) => exerciseApi.getExercisePacks(id))
      .then(pack => (
        setExerciseData(prev => ({...prev, exercisePack: { ...pack.data, id: prev.exercisePackId }}))
      ))
      .catch(error => {
        console.log((error as AxiosError)?.response?.data || (error as Error).message);
        setExerciseData(prev => ({...prev, isPackRequested: false}))
        throw error;
      });
  }

  const checkAndFetchIfNeeded = async () => {
    if (!exerciseData.exercisePack && !exerciseData.isPackRequested) {
      fetchExercisePack()
        .catch(error => { throw error });
    }
  }

  const getData = (): IData | undefined => { //Переписать в селектор
    if (authData.user?.isSuperuser || (authData.user?.subscriptions && authData.user?.subscriptions.length > 0)) {
      return exerciseData.exercisePack?.privateDataJson;
    }
    return exerciseData.exercisePack?.publicDataJson;
  }

  return {
    checkAndFetchIfNeeded,
    getData
  }
}