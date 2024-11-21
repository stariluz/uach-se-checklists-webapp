import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/AuthProvider.tsx';

if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
  console.error('VITE_GOOGLE_CLIENT_ID no está definido');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
