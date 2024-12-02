import { IAudio, ITask } from '@/pages/Task/exercise.types'
import audioManager from '@/utils/audioManager'

class SolveTaskService {
  public isDragDisabled: boolean = false

  public handleSolve(task: ITask['id'], rigthAnswered: boolean) {
    this.isDragDisabled = true
  }

  public async startSolveTask(audio: IAudio) {
    audioManager.setNewSrc(audio?.file)
    await audioManager.play()
    this.isDragDisabled = false
  }
}

const solveStartService = new SolveTaskService()
export default solveStartService
