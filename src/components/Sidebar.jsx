import React, { useState } from "react";

const Sidebar = () => {
  const [price, setPrice] = useState(250);

  return (
    <aside className="hidden mt-[65px] lg:flex flex-col w-[355px] bg-white p-4 gap-6">
      {/* Hot Deals */}
      <div className="bg-[#F6F7F8] border border-gray-200 rounded p-4">
        <h3 className="font-poppins font-medium text-[20px] mb-2">Hot Deals</h3>
        <ul className="space-y-2 text-gray-700">
          {["Nike", "Airmax", "Adidas", "Vans", "All Stars"].map((item) => (
            <li
              key={item}
              className="hover:text-blue-500 cursor-pointer font-proxima font-normal text-[18px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="bg-[#F6F7F8] border border-gray-200 rounded p-4">
        <h3 className="text-lg font-semibold mb-3">Prices</h3>
        <input
          type="range"
          min="0"
          max="500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-2 text-gray-600">
          <span>$0</span>
          <span>${price}</span>
        </div>
      </div>

      {/* Colors */}
      <div className="bg-[#F6F7F8] border border-gray-200 rounded p-4">
        <h3 className="text-lg font-semibold mb-3">Color</h3>
        <div className="flex gap-3 flex-wrap">
          {[
            "#006CFF",
            "#FC3E39",
            "#171717",
            "#FFF600",
            "#FF00B4",
            "#EFDFDF",
          ].map((hex) => (
            <div
              key={hex}
              className="w-6 h-6 rounded-full border cursor-pointer"
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="bg-[#F6F7F8] border border-gray-200 rounded p-4">
        <h3 className="text-lg font-semibold mb-3">Brand</h3>
        <ul className="space-y-2 text-gray-700">
          {["Nike", "Adidas", "Skechers", "Vans"].map((brand) => (
            <li
              key={brand}
              className="hover:text-blue-500 cursor-pointer font-normal"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {/* More Button */}
      <div className="bg-[#F6F7F8] border border-gray-200 rounded p-4">
        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
          More
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
