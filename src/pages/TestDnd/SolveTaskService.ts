import { ITask } from "../../contextes/ExerciseContext/exercise.types";

class SolveTaskService{
  public isDragDisabled: boolean = false

  public handleSolve(task: ITask['id'], rigthAnswered: boolean){
    this.isDragDisabled = true
  }

  public startSolveTask(){
    this.isDragDisabled = false
  }
}

const solveStartService = new SolveTaskService()
export default solveStartService