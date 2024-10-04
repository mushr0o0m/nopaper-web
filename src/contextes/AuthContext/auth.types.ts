import { IGroupSet, ILevel, ITask } from "../ExerciseContext/exercise.types"

export interface IApplicationState {
  progress: IUserProgress
  currentSetId: IGroupSet['id']
  selectedLevelId: ILevel['id'] | null
  onBoardPassed: boolean
  visitedMainScreen: boolean
  hasEverLoggedIn: boolean
  introVideoPlayed: boolean
  secondIntroVideoPlayed: boolean
}

interface IUserProgress {
  [id: ITask['id']]: boolean;
}

export interface IUser{
  id: string,
  email: string,
  lastName: string | null,
  middleName: string | null,
  firstName: string | null,
  phone: string | null,
  subscriptions: [],
  applicationState: null,
  isStaff: boolean,
  isSuperuser: boolean,
  isGuest: boolean
}

//response

export interface AuthResponse {
  refresh: string;
  access: string;
  refreshExpires: number;
  accessExpires: number;
}

export interface GuestResponse {
  userId: string;
}