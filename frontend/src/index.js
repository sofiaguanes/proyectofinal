import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Obtener el elemento root del DOM
const container = document.getElementById('root');

// Crear una raíz con la nueva API
const root = createRoot(container);

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);