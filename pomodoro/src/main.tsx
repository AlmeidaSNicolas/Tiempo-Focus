import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Card  from './App'
import './styles/theme.css';
import './styles/global.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card />
  </StrictMode>,
)
