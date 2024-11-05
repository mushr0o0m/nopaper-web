import { ITaskGroup } from '../exercise.types.ts'
import { useRecoilValue } from 'recoil'
import exerciseSelectors from '../exercise.selectors.ts'
import { useMemo } from 'react'

const useGroupTasks = (groupId: ITaskGroup['id']) => {
  const exerciseData = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)

  return useMemo(() => {
    return exerciseData?.tasks.filter((task) => task.group === groupId) || []
  }, [groupId, exerciseData])
}

export default useGroupTasks
