import React from 'react';
import { createRoot } from 'react-dom/client';
import './app/layout/style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/Router/Routes';

const container = document.getElementById('root') as HTMLElement; // Type assertion
const root = createRoot(container); // Create root instance

const App = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

root.render(App); // Render the app using root
