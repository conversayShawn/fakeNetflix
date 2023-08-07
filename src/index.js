import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from "react-dom/client" instead of "react-dom"
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

createRoot(rootElement).render( // Use createRoot from "react-dom/client"
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
