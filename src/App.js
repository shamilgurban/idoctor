// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DoctorList from './DoctorList';
import Register from './Register'
import ContactUS from './ContactUs';
import About from './About';
import Login from './Login'
import RegisterforDoc from './RegisterforDoc'
import Download from './Download'
import DoctorDetails from './DoctorDetails'
import BookAppointment from './BookAppointment'
import Confirm from './Confirm'
import ForgotPass from './ForgotPass'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DoctorList" element={<DoctorList />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ContactUs" element={<ContactUS />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RegisterforDoc" element={<RegisterforDoc />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/DoctorDetails" element={<DoctorDetails />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route path="/Confirm" element={<Confirm />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
      </Routes>
  );
}

export default App;