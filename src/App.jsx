import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Bag from "./pages/Bag";
import Sneakers from "./pages/Sneakers";
import Belt from "./pages/Belt";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/belt" element={<Belt />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
