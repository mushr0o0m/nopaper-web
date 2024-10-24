import { selector } from "recoil"
import { authState } from "../auth/auth.atom"
import { exerciseState } from "./exercise.atom"

const getExerciseDataByUserStatus = selector({
  key: 'getExerciseDataByUserStatus',
  get: ({ get }) => {
    const {user} = get(authState)
    const {exercisePack} = get(exerciseState)
    if (user?.isSuperuser || (user?.subscriptions && user?.subscriptions.length > 0)) {
      return exercisePack?.privateDataJson
    }
    return exercisePack?.publicDataJson
  },
})



const exerciseSelectors = {getExerciseDataByUserStatus}

export default exerciseSelectors