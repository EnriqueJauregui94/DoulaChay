import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Packages from './Components/Packages.jsx';
import Remedies from './Components/Remedies.jsx';
import Abortions from './Components/Abortions.jsx';
import './StylePage/Abortions.css';
import './StylePage/Remedies.css';
import './StylePage/Packages.css';
import './StylePage/Home.css';
import './App.css';
import './StylePage/Navbar.css';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/remedies" element={<Remedies />} />
        <Route path="/abortions" element={<Abortions />} />
      </Routes>
    </div>
  );
}

export default App;
