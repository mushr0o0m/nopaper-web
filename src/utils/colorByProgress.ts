const colorByProgress = (isTaskSolved: boolean | null) => {
  switch (isTaskSolved) {
    case true:
      return '--success'
    case false:
      return '--alert'
    default:
      return '--white'
  }
}

export default colorByProgress