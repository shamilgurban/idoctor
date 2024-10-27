import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegisterDoc from "./pages/RegisterforDoc";
import DoctorDash from "./DoctorDash";
import About from "./pages/About";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import FileUpload from "./FileUpload";
import DoctorDetails from "./pages/DoctorDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterDoc" element={<RegisterDoc />} />
        <Route path="/DoctorDash" element={<DoctorDash />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FileUpload" element={<FileUpload />} />
        {/* Update this route to accept an ID */}
        <Route path="/DoctorDetails/:id" element={<DoctorDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
