import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CurrencyProvider } from './contexts/CurrencyContext';
import './index.css';
import { Currency } from 'lucide-react';

createRoot(document.getElementById('root')!).render(
  <CurrencyProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CurrencyProvider>
);
