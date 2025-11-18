import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary'

// Global error boundary as a last resort safety net
// This catches any errors that escape route-level boundaries
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary
      fallbackTitle="Application Error"
      fallbackMessage="We encountered a critical error. Please refresh the page or contact support if the problem persists."
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
