import eventBus from '@/eventBus'
import { IUserProgress } from '@/pages/Settings/user.types'
import { IAudio, ITask } from '@/pages/Task/exercise.types'
import audioManager from '@/utils/audioManager'

const SOUND_COUNT = {
  'RIGHT_SOUND_NUM': 12,
  'WRONG_SOUND_NUM': 7
}

class SolveTaskService {
  public isDragDisabled: boolean = false

  public async handleSolve(
    task: ITask['id'],
    isRigthAnswered: boolean,
    saveUserProgress: (userProgress: IUserProgress) => Promise<void>) {

    this.isDragDisabled = true
    await saveUserProgress({ [task]: isRigthAnswered })
    await audioManager.setNewSrc(this.getSrcSolveSound(isRigthAnswered))
    await audioManager.play()
    await setTimeout(() => {}, 10000)
    eventBus.emit('onTaskFinish', {})
  }

  public async startSolveTask(audio: IAudio) {
    await audioManager.setNewSrc(audio.file)
    audioManager.play()
    this.isDragDisabled = false
  }

  public stopSolveTask() {
    audioManager.pause()
    this.isDragDisabled = false
  }

  private getSrcSolveSound(isRigthAnswered: boolean){
    const soundNum = isRigthAnswered ? SOUND_COUNT.RIGHT_SOUND_NUM : SOUND_COUNT.WRONG_SOUND_NUM
    const soundIndex = Math.floor(Math.random() * (soundNum - 1) + 1)
    return `/mp3/${isRigthAnswered ? 'rightAnswer' : 'wrongAnswer'}/${soundIndex}.mp3`
  }
}

const solveStartService = new SolveTaskService()
export default solveStartService
