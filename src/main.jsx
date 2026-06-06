import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BucketProvider } from './context/BucketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BucketProvider>
        <App />
      </BucketProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
