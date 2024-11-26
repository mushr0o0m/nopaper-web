import { useRecoilState } from 'recoil'
import exerciseApi from '../exercise.api'
import { exerciseState } from '../exercise.atom'

export const useExercisesLoad = () => {
  const [exerciseData, setExerciseData] = useRecoilState(exerciseState)

  const fetchExercisePack = async () => {
    const availablePacks = await exerciseApi.getListAvailableExercisePacks()
    if (availablePacks.status === 'error'){
      setExerciseData(prev => ({
        ...prev,
        isPackRequested: false,
      }))
      return
    }

    const productionPack = availablePacks.body.results[0]
    const productionPackWithData = await exerciseApi.getExercisePackData(productionPack.id)
    if (productionPackWithData.status === 'error'){
      setExerciseData(prev => ({
        ...prev,
        isPackRequested: false,
      }))
      return
    }

    setExerciseData((prev) => ({
      ...prev,
      exercisePack: {
        id: productionPack.id,
        publicDataJson: productionPackWithData.body.publicDataJson,
        privateDataJson: productionPackWithData.body.privateDataJson,
      },
      isPackRequested: false,
    }))
  }

  const loadExercises = async () => {
    if (!exerciseData.exercisePack) {
      setExerciseData(prev => ({
        ...prev,
        isPackRequested: true,
      }))
      await fetchExercisePack()
    }
  }

  return {
    loadExercises,
  }
}

export default useExercisesLoad
