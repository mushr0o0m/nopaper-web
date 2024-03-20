import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './utils/route/AppRouter.tsx';
import './font.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
