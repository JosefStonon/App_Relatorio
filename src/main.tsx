import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from './components/ui/toaster.tsx';
import { AppRoutes } from './Route.tsx';
import './views/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <AppRoutes />
  </StrictMode>,
);
