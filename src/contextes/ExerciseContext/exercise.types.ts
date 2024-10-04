export interface IAudio {
  id: string
  task: ITask['id']
  file: string // url
}

export interface IImage {
  id: string
  task: ITask['id']
  file: string // url
  rightAnswer: boolean
  scale: number // 0.1 - 0.5
}

export interface ITextOption {
  id?: string
  rightAnswer: boolean
  text: string
  task?: ITask['id']
  approximatedTextWidth: number
}

export interface ISimpleTask {
  id: string
  type: 0 | 1 | 2
  audio: IAudio[]
  images: IImage[]
  answerOptions: ITextOption[]
  group: ITaskGroup['id']
  orderingIndex: number
}

export interface IQuestionWithImageTask extends Omit<ISimpleTask, 'type'> {
  type: 3 | 4 | 7
  question: string
}

export interface IImageMatchTask extends Omit<ISimpleTask, 'answerOptions' | 'type'> {
  type: 5
  wordToMatch: ITextOption
}

export interface ITextTask extends Omit<ISimpleTask, 'type'> {
  type: 6
  question: string
}

export interface IIntroTask {
  id: string
  type: 8
  question: string
  audio: IAudio | null
  images: IImage[]
  group: ITaskGroup['id']
  orderingIndex: number
  answerOptions?: ITextOption[]
}

export interface IReadingTask extends Omit<ISimpleTask, 'type'> {
  type: 9
  question: string
  description: string
}

export type ITask = ISimpleTask | IQuestionWithImageTask | IImageMatchTask | ITextTask | IIntroTask | IReadingTask

export interface IPack {
  id: string,
  publicDataJson: IData,
  privateDataJson: IData,
}

export interface IData {
  levels: ILevel[],
  sets: IGroupSet[],
  groups: ITaskGroup[],
  tasks: ITask[],
}

export interface ILevel {
  id: string,
  pack: IPack['id'],
  name: string,
  description: string,
  orderingIndex: number,
}

export interface IGroupSet {
  id: string,
  name: string,
  orderingIndex: number,
  level: ILevel['id'],
}

export interface ITaskGroup {
  id: string,
  name: string,
  set: IGroupSet['id'],
  premium: boolean,
}

export interface IAvailableExercisePacksResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: IAvailablePackResponse[];
}

export interface IAvailablePackResponse {
  id: string,
  name: string,
  status: string,
  publicData: string,
  privateData: string,
  webpImagesPublicData: string,
  webpImagesPrivateData: string,
  version: number,
  orderingIndex: number,
}
