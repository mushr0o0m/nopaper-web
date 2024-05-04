interface IExercisePacks {
  count: number;
  next: null;
  previous: null;
  results: IPack[];
}

interface IPack {
  id: string
  name: string
  status: string
  version: number
  publicDataJson: string
  privateDataJson: string
  orderingIndex: number
}

interface IData {
  sets: 
}

interface ILevel {
  id: string
  pack: IPack['id']
  name: string
  description: string
  orderingIndex: number
  created: string
  updated: string
}

interface IAudio {
  id: string
  task: ITask['id']
  file: string // url
}

interface IImage {
  id: string
  task: ITask['id']
  file: string // url
  rightAnswer: boolean
  scale: number // 0.1 - 0.5
}

interface ITextOption {
  id?: string
  rightAnswer: boolean
  text: string
  task?: ITask['id']
  approximatedTextWidth: number
}

interface IGroupSet {
  id: string
  name: string
  userOrderingIndex: number
  level: ILevel['id']
}

interface ITaskGroup {
  id: string
  name: string
  set: IGroupSet['id']
  premium: boolean
}

interface ISimpleTask {
  id: string
  type: 0 | 1 | 2
  audio: IAudio
  images: IImage[]
  answerOptions: ITextOption[]
  group: ITaskGroup['id']
  orderingIndex: number
}

interface IQuestionWithImageTask extends Omit<ISimpleTask, 'type'> {
  type: 3 | 4 | 7
  question: string
}

interface IImageMatchTask extends Omit<ISimpleTask, 'answerOptions' | 'type'> {
  type: 5
  wordToMatch: ITextOption
}

interface ITextTask extends Omit<ISimpleTask, 'type'> {
  type: 6
  question: string
}

interface IIntroTask {
  id: string
  type: 8
  question: string
  audio: IAudio | null
  images: IImage[]
  group: ITaskGroup['id']
  orderingIndex: number
  answerOptions?: ITextOption[]
}

interface IReadingTask extends Omit<ISimpleTask, 'type'> {
  type: 9
  question: string
  description: string
}

type ITask = ISimpleTask | IQuestionWithImageTask | IImageMatchTask | ITextTask | IIntroTask | IReadingTask





