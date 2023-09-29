import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import './StylePage/Home.css';
import './App.css';
import './StylePage/Navbar.css';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
