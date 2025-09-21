import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import products from "../data/products"; // ✅ add this

const Home = () => {
  // Lifted state for filters
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Get maximum discountPrice from products
  const maxProductPrice = Math.max(...products.map((p) => p.discountPrice));
  const [selectedPrice, setSelectedPrice] = useState(maxProductPrice);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        maxProductPrice={maxProductPrice} // optional, slider ko max limit ke liye pass kar sakte ho
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
