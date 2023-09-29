// src/App.js
import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const barChartData = [
    { label: 'A', value: 10 },
    { label: 'B', value: 20 },
    { label: 'C', value: 15 },
    // Add more data points as needed
  ];

  return (
    <div className="App">
      <Dashboard barChartData={barChartData} />
    </div>
  );
}

export default App;
