import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './App.css';
import App from '../../../officer/src/App';

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
