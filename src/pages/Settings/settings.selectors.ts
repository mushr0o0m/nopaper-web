import { selector } from 'recoil'
import settingsAtom from './settings.atom'
import exerciseSelectors from '../Task/exercise.selectors'
import { IGroupSet, ITaskGroup } from '../Task/exercise.types'
import { IUserProgress } from './user.types'

const getUserProgress = selector({
  key: 'getUserProgress',
  get: ({ get }) => {
    const { user } = get(settingsAtom)
    const data = get(exerciseSelectors.getExerciseDataByUserStatus)

    const tasksByGroupId = (groupId: IGroupSet['id']) => {
      return data?.tasks.filter(task => task.group === groupId)
    }

    const getSolvedTasksByGroupId = (groupId: IGroupSet['id']) => {
      return (
        tasksByGroupId(groupId).reduce((acc, task) => {
        acc[task.id] = user.applicationState?.progress[task.id] || null
        return acc
      }, {} as IUserProgress)
    )
    }

    const result = data?.groups.reduce((acc, group) => {
      acc[group.id] = getSolvedTasksByGroupId(group.id)
      return acc
    }, {} as Record<ITaskGroup['id'], IUserProgress>)
    
    return result
  },
})
const settingsSelectors = { getUserProgress }

export default settingsSelectors
