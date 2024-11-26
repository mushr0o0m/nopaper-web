import { IGroupSet, ILevel, ITask } from "../Task/exercise.types"


export interface IApplicationState {
  progress: IUserProgress
  currentSetId: IGroupSet['id']
  selectedLevelId: ILevel['id'] | null
}

export type IUserProgress = Record<ITask['id'], boolean>

export interface IUser {
  id: string
  email: string
  lastName?: string
  middleName?: string
  firstName?: string
  phone?: string
  subscriptions: []
  applicationState?: IApplicationState
  isStaff: boolean
  isSuperuser: boolean
  isGuest: boolean
}


