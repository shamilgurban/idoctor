// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import DoctorList from './DoctorList';
import Register from './Register';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DoctorList" element={<DoctorList />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
  );
}

export default App;