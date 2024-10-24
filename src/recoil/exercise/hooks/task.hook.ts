import { useRecoilValue } from "recoil";
import exerciseSelectors from "../exercise.selectors";

export const useTask = () => {
  const exerciseData = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)

  const getTaskData = (tempGroupId: string) => {
    return exerciseData?.tasks.filter(task => task.group === tempGroupId) || []
  }
  const getTaskById = (tempGroupId: string, taskId: string) => {
    return getTaskData(tempGroupId).find((task) => task.id === taskId)
  }

  return {
    getTaskData,
    getTaskById,
  }
}