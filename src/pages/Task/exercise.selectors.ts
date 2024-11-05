import { selector } from 'recoil'
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

const exerciseSelectors = { getExerciseDataByUserStatus }

export default exerciseSelectors
