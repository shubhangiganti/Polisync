import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Officer Portal</h1>
        <div className="options-container">
          <button className="option-button">Crime Dashboard</button>
          <button className="option-button">View FIR</button>
          <button className="option-button">Complaint Dashboard</button>
        </div>
      </header>
    </div>
  );
}

export default App;
