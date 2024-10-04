import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './navigation/route';
import './styles/variables.css'
import './styles/font.css'
import './styles/index.css'
import TaskProvider from './contextes/TaskContext/TaskProvider';
import AuthProvider from './contextes/AuthContext/AuthProvider';
import ExerciseProvider from './contextes/ExerciseContext/ExerciseProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ExerciseProvider>
        <TaskProvider>
          <AppRouter />
        </TaskProvider>
      </ExerciseProvider>
    </AuthProvider>
  </React.StrictMode>,
)
