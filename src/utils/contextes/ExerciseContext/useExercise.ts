import { useContext } from 'react'
import { ExerciseContext } from './ExerciseContext';

export const useAuth = () => {
    const context = useContext(ExerciseContext);
    if (!context) {
        throw new Error('useAuth must be used within a ExerciseProvider');
    }
    return context;
}