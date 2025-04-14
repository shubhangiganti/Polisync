import React from 'react';
import './App.css';
import Home from './components/Home';
// Importing the Footer component 
import Footer from './components/Footer';
// Adding the Footer component to the App component
function App() {
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}
// Exporting the App component
// This is the main entry point of the application
// It renders the Home component and the Footer component
// The Home component contains the main content of the application

export default App;
