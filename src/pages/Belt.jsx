import React, { useState } from "react";
import products from "../data/products"; // aapke products data
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const Belt = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(6); // products per page

  // Filter only belt products
  const beltProducts = products.filter(
    (p) => p.category?.toLowerCase() === "belt" // ya aapke product data me category/type "Belt" ho
  );

  // Pagination logic
  const totalPages = Math.ceil(beltProducts.length / show);
  const indexOfLastProduct = currentPage * show;
  const indexOfFirstProduct = indexOfLastProduct - show;
  const currentProducts = beltProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="min-h-screen p-4 mt-[65px] flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4">Belt Page</h1>
      <p className="mb-4">Find premium belts for all occasions.</p>

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

      {/* Show selector */}
      <div className="mt-4 flex items-center gap-2">
        <label>Show:</label>
        <select
          value={show}
          onChange={(e) => {
            setShow(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={18}>18</option>
          <option value={24}>24</option>
        </select>
      </div>
    </div>
  );
};

export default Belt;
