import { createRoot } from 'react-dom/client';
import React from 'react'; // Import React
import App from './app/layout/App';
import './app/layout/style.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const container = document.getElementById('root') as HTMLElement; // Type assertion
const root = createRoot(container); // Create root instance

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
