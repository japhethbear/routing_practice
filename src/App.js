import './App.css';
import React from 'react';
import {
  Link,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Combo from './components/Combo';

function App() {
  return (
    <div className="App">
        <Link to="/home">Home</Link>
        <br />
        <Link to="/4">Number</Link>
        <br />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:word" element={<Combo />} />
          <Route path="/:word/:textColor/:bkgdColor" element={<Combo />} />
        </Routes>
    </div>
  );
}

export default App;
