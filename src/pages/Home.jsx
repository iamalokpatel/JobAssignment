import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";

const Home = () => {
  // Lifted state for filters
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(500); // max price slider

  return (
    <div className="flex min-h-screen">
      <Sidebar
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <MainSection
        selectedBrand={selectedBrand}
        selectedColor={selectedColor}
        selectedPrice={selectedPrice}
      />
    </div>
  );
};

export default Home;
