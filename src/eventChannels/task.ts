import eventbus from "../eventBus"


const taskEventChannel = eventbus<{
  onTaskFinish: () => void
}>()

export default taskEventChannel