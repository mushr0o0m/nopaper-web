import { useRecoilValue } from 'recoil'
import { useMemo } from 'react'
import { ITaskGroup } from '@/pages/Task/exercise.types'
import exerciseSelectors from '@/pages/Task/exercise.selectors'

const useGroupTasks = (groupId: ITaskGroup['id']) => {
  const exerciseData = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)

  return useMemo(() => {
    return exerciseData?.tasks.filter((task) => task.group === groupId) || []
  }, [groupId, exerciseData])
}

export default useGroupTasks
