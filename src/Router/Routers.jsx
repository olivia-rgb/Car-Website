import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import ContactPage from "../pages/ContactPage";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login"
import AllCars from "../pages/AllCars"
import AllBike from "../pages/AllBike"
import AllBus from "../pages/AllBus"
import AllHeavy from "../pages/AllHeavy"
import AllParts from "../pages/AllParts"
import AllTruck from "../pages/AllTruck"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/allcars" element={<AllCars />} />
      <Route path="/allbike" element={<AllBike />} />
      <Route path="/allbus" element={<AllBus />} />
      <Route path="/allheavy" element={<AllHeavy />} />
      <Route path="/allparts" element={<AllParts />} />
      <Route path="/alltruck" element={<AllTruck />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers