import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AuthProvider from './contexts/AuthProvider.jsx';
import { Router } from './routes/Router.jsx';
import { RouterProvider } from 'react-router';
AOS.init({
  duration: 500,
  once: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
