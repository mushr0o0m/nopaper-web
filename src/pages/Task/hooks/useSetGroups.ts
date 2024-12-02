import { useRecoilValue } from 'recoil'
import { useMemo } from 'react'
import exerciseSelectors from '@/pages/Task/exercise.selectors'
import { IGroupSet } from '../exercise.types'

const useSetGroups = (setId: IGroupSet['id']) => {
  const exerciseData = useRecoilValue(exerciseSelectors.getExerciseDataByUserStatus)

  return useMemo(() => {
    return exerciseData?.groups.filter((group) => group.set === setId) || []
  }, [setId, exerciseData])
}

export default useSetGroups
