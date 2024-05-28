import { useContext } from 'react'
import { ExerciseContext } from './ExerciseContext';

export const useExercise = () => {
    const context = useContext(ExerciseContext);
    if (!context) {
        throw new Error('useExercise must be used within a ExerciseProvider');
    }
    return context;
}