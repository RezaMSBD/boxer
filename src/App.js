import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./shared/header/Header";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import Footer from "./shared/footer/Footer";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Learning from "./pages/Learning";
import JavaScript from "./pages/JavaScript";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/javascript" element={<JavaScript />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
