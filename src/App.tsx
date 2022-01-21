import React from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import { NavBar } from './components/componentIndex';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Alert>This is a react-bootstrap alert.</Alert>
    </div>
  );
}

export default App;
