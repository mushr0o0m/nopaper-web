import { ITask } from "../../exercise.types"


export interface TaskTypesProps<T extends ITask = ITask> {
  task: T;
}