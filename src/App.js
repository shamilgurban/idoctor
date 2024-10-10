import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegisterDoc from "./pages/RegisterforDoc";
import About from "./pages/About";
import Login from "./Login";
import Layout from "./components/Layout/Layout";
import DoctorDetails from "./DoctorDetails";
import Test from "./pages/Test";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterDoc" element={<RegisterDoc />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/DoctorDetails" element={<DoctorDetails />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </Layout>
  );
}

export default App;
