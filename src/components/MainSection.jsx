import React, { useState } from "react";
import shoe from "../assets/shoe_logo.png";
import switch_1 from "../assets/switch-1.png";
import switch_2 from "../assets/switch-2.png";
import products from "../data/products";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const MainSection = ({ selectedBrand, selectedColor, selectedPrice }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Name");
  const [show, setShow] = useState(6); // number of products per page

  // 1️⃣ Filter by brand and color (updated)
  const filteredProducts = products.filter((p) => {
    const brandMatch = selectedBrand ? p.brand === selectedBrand : true;
    const colorMatch = selectedColor
      ? p.colors?.some((c) => c.toLowerCase() === selectedColor.toLowerCase())
      : true;
    const priceMatch = selectedPrice ? p.discountPrice <= selectedPrice : true;

    return brandMatch && colorMatch && priceMatch;
  });

  // 2️⃣ Sort products
  if (sortBy === "Name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "Price") {
    filteredProducts.sort((a, b) => a.discountPrice - b.discountPrice);
  } else if (sortBy === "Rating") {
    filteredProducts.sort((a, b) => b.ratingValue - a.ratingValue);
  } else if (sortBy === "Newest") {
    filteredProducts.sort((a, b) => b.id - a.id); // higher id = newer
  }

  // 3️⃣ Pagination
  const totalPages = Math.ceil(filteredProducts.length / show);
  const indexOfLastProduct = currentPage * show;
  const indexOfFirstProduct = indexOfLastProduct - show;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <main className="flex-1 p-4 mt-[65px] flex flex-col gap-6">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#40BFFF] shadow rounded p-6 gap-4">
        <div className="flex flex-col gap-2 text-center lg:text-left lg:flex-1">
          <h1 className="font-poppins font-medium text-[30px] text-white">
            Adidas Men Running Sneakers
          </h1>
          <p className="font-poppins text-[14px] text-white">
            Performance and design. Taken right to the edge.
          </p>
          <a
            href="#"
            className="font-poppins font-medium text-[14px] text-white underline hover:text-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
        <div className="lg:flex-1 flex justify-center lg:justify-end">
          <img
            src={shoe}
            alt="Shoe"
            className="w-[300px] sm:w-[400px] lg:w-[442px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Toolbar Section */}
      <div className="flex justify-between items-center bg-[#F6F7F8] rounded shadow">
        <div className="flex items-center gap-18">
          <p className="font-proxima font-normal text-[16px] leading-[16px] tracking-[0%] text-[#22262A]">
            {filteredProducts.length} Items found
          </p>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="font-proxima font-normal text-[16px] leading-[16px] tracking-[0%] text-[#22262A]">
              Sort By:
            </label>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
            >
              <option value="Name">Name</option>
              <option value="Price">Price</option>
              <option value="Rating">Rating</option>
              <option value="Newest">Newest</option>
            </select>
          </div>

          {/* Show */}
          <div className="flex items-center gap-2">
            <label className="font-proxima font-normal text-[16px] leading-[16px] tracking-[0%] text-[#22262A]">
              Show:
            </label>
            <select
              value={show}
              onChange={(e) => {
                setShow(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
            >
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={18}>18</option>
              <option value={24}>24</option>
              <option value={36}>36</option>
            </select>
          </div>
        </div>

        {/* View Switch */}
        <div className="flex items-center">
          <button className="p-[1.10px] hover:bg-[#40BFFF] hover:text-white transition">
            <img
              src={switch_1}
              alt="Grid View"
              className="w-[61.47px] h-[62.57px]"
            />
          </button>
          <button className="hover:bg-[#40BFFF] hover:text-white transition">
            <img
              src={switch_2}
              alt="List View"
              className="w-[61.47px] h-[62.57px]"
            />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </main>
  );
};

export default MainSection;
