import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Netflix from './Netflix.jsx'
import Card1 from './Card1.jsx'
import App1 from './App1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Netflix />
  </StrictMode>,
)
