import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from './components/ui/toaster.tsx';
import { Home } from './views/home/home.tsx';
import './views/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <Home />
  </StrictMode>,
);
