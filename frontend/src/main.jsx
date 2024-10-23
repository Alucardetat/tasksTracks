import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import App from './App'; // Import the main App component
import { BrowserRouter } from 'react-router-dom'; // Import Router for navigation

// Render the App inside a BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);