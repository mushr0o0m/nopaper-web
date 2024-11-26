import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './navigation';
import './styles/variables.css'
import './styles/font.css'
import './styles/index.css'
import { RecoilRoot } from 'recoil';
import TaskLoaderProvider from '@/shared/PageLoader/contexts/TaskLoaderContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <TaskLoaderProvider>
        <AppRouter />
      </TaskLoaderProvider>
    </RecoilRoot>
  </React.StrictMode>
)
