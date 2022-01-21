import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/componentIndex';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Greetings from App.tsx (conlaw-buddy app)</h1>
      <div>
        <Routes>
          <Route
            path="/"
            element={<p>React Router checking in. This is the * route.</p>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
