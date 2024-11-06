import { useRecoilValue } from 'recoil'
import exerciseSelectors from '../exercise.selectors'
import { useMemo } from 'react'
import { ITask } from '@/pages/Task/exercise.types'

const useTask = (id: ITask['id']) => {
  const exerciseData = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)

  return useMemo(() => {
    return exerciseData?.tasks.find((t) => t.id === id)
  }, [id, exerciseData])
}

export default useTask
