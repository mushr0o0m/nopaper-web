import { ITaskGroup } from "./exercisePackTypes"

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

