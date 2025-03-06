import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import "./index.css";
import AuthForm from './AuthForm';

const root = createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <AuthForm />
  </React.StrictMode>
);

