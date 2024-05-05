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