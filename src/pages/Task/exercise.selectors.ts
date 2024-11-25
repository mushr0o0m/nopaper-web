import { selector, selectorFamily } from 'recoil'
import { exerciseState } from './exercise.atom'
import authAtom from '@/pages/Authorization/auth.atom'

const getExerciseDataByUserStatus = selector({
  key: 'getExerciseDataByUserStatus',
  get: ({ get }) => {
    const { user } = get(authAtom)
    const { exercisePack } = get(exerciseState)

    if (user?.isSuperuser || (user?.subscriptions && user?.subscriptions.length > 0)) {
      return exercisePack?.privateDataJson
    }

    return exercisePack?.publicDataJson
  },
})

const getSetIdsByLevelId = selectorFamily({
  key: 'getSetIdsByLevelId',
  get: (levelId) => ({ get }) => {
    const data = get(getExerciseDataByUserStatus);
    
    return data?.sets.filter((set) => set.level === levelId).map((set) => set.id)
  }
})

const exerciseSelectors = { getExerciseDataByUserStatus, getSetIdsByLevelId}

export default exerciseSelectors
