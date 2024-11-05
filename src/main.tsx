import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './navigation';
import './styles/variables.css'
import './styles/font.css'
import './styles/index.css'
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  </React.StrictMode>
)
