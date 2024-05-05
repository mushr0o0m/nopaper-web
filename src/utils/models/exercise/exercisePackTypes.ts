import { ITask } from "./taskTypes";

export interface IExercisePacks {
  count: number;
  next: null;
  previous: null;
  results: IPack[];
}

export interface IPack {
  id: string
  name: string
  status: string
  version: number
  publicDataJson: string
  privateDataJson: string
  orderingIndex: number
}

export interface IData {
  levels: ILevel[];
  sets: IGroupSet[];
  groups: ITaskGroup[]
  tasks: ITask[];
}

export interface ILevel {
  id: string
  pack: IPack['id']
  name: string
  description: string
  orderingIndex: number
  created: string
  updated: string
  
}

export interface IGroupSet {
  id: string
  name: string
  orderingIndex: number
  level: ILevel['id']
}

export interface ITaskGroup {
  id: string
  name: string
  set: IGroupSet['id']
  premium: boolean
}


