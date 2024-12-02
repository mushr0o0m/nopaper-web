import { selector } from 'recoil'
import settingsAtom from './settings.atom'
import exerciseSelectors from '../Task/exercise.selectors'
import { IGroupSet, ITaskGroup } from '../Task/exercise.types'
import { IUserProgress } from './user.types'

interface IGroupProgress{
  solvedTasks: number,
  progress: IUserProgress
}

const getProgressByGroups = selector({
  key: 'getProgressByGroups',
  get: ({ get }) => {
    const { user } = get(settingsAtom)
    const data = get(exerciseSelectors.getExerciseDataByUserStatus)
    const result: Record<ITaskGroup['id'], IGroupProgress> = {}
    data?.tasks.forEach(task => {
      if(!result[task.group]){
        result[task.group] = {solvedTasks: 0, progress: {}}
      }
      if(user.applicationState?.progress[task.id] === undefined){
        result[task.group].progress[task.id] = null
      } else {
        result[task.group].progress[task.id] = user.applicationState?.progress[task.id]
        result[task.group].solvedTasks += Number(user.applicationState?.progress[task.id] || null)
      }
    })
    return result
  },
})

const getSolvedSets = selector({
  key: 'getSolvedSets',
  get: ({ get }) => {
    const data = get(exerciseSelectors.getExerciseDataByUserStatus)
    const progress = get(getProgressByGroups)
    const result: Record<IGroupSet['id'], boolean> = {}
    data?.groups.forEach(group => {
      if(result[group.set] === undefined){
        result[group.set] = true
      }
      result[group.set] = progress[group.id].solvedTasks >= 7
    })
    return result
  },
})
const settingsSelectors = { getSolvedSets, getProgressByGroups}

export default settingsSelectors
