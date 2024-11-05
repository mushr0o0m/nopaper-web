import { useRecoilValue } from 'recoil'
import exerciseSelectors from '../exercise.selectors'
import { ITask } from '../exercise.types.ts'
import { useMemo } from 'react'

const useTask = (id: ITask['id']) => {
  const exerciseData = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)

  return useMemo(() => {
    return exerciseData?.tasks.find((t) => t.id === id)
  }, [id, exerciseData])
}

export default useTask
