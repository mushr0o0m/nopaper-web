import { atom } from 'recoil'
import { IPack } from './exercise.types'

export interface IExercise{
  exercisePack?: IPack
  isPackRequested: boolean
  exercisePackId: string
}

export const exerciseState = atom<IExercise>({
  key: 'exerciseState',
  default: {
    'exercisePack': undefined,
    'isPackRequested': false,
    'exercisePackId': "",
  },
})