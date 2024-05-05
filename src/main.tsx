import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './utils/route/AppRouter.tsx';
import './font.css'
import './index.css'
import { AuthProvider } from './utils/contextes/AuthContext/AuthProvider.tsx';
import { ExerciseProvider } from './utils/contextes/ExerciseContext/ExerciseProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ExerciseProvider>
      <AppRouter />
      </ExerciseProvider>
    </AuthProvider>
  </React.StrictMode>,
)
