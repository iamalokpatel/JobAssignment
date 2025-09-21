import React from "react";

const Sidebar = ({
  selectedBrand,
  setSelectedBrand,
  selectedColor,
  setSelectedColor,
  selectedPrice,
  setSelectedPrice,
}) => {
  const brands = ["Nike", "Adidas", "Skechers", "Vans", "Airmax"];
  const colors = [
    { name: "blue", hex: "blue" },
    { name: "red", hex: "red" },
    { name: "black", hex: "black" },
    { name: "yellow", hex: "yellow" },
    { name: "pink", hex: "pink" },
    { name: "grey", hex: "grey" },
  ];

  return (
    <aside className="hidden mt-[65px] lg:flex flex-col w-[355px] bg-white p-4 gap-6">
      {/* Hot Deals */}
      <div className="bg-[#F6F7F8] border border-gray-200 rounded p-4">
        <h3 className="font-poppins font-medium text-[20px] mb-2">Hot Deals</h3>
        <ul className="space-y-2 text-gray-700">
          {["Nike", "Airmax", "Adidas", "Vans", "All Stars"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer font-proxima font-normal text-[18px] hover:text-blue-500 ${
                selectedBrand === item ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => setSelectedBrand(item)}
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
          max={10000} // ya max price in your products array
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(Number(e.target.value))}
        />
        <div className="flex justify-between text-sm mt-2 text-gray-600">
          <span>$0</span>
          <span>${selectedPrice}</span>
        </div>
      </div>

      {/* Color Filter */}
      <div className="bg-[#F6F7F8] border border-gray-200 rounded p-4">
        <h3 className="text-lg font-semibold mb-3">Color</h3>
        <div className="flex gap-3 flex-wrap">
          {colors.map((color) => (
            <div
              key={color.hex}
              className={`w-6 h-6 rounded-full border cursor-pointer ${
                selectedColor === color.hex ? "border-4 border-blue-500" : ""
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() =>
                setSelectedColor(selectedColor === color.hex ? "" : color.hex)
              }
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="bg-[#F6F7F8] border border-gray-200 rounded p-4">
        <h3 className="text-lg font-semibold mb-3">Brand</h3>
        <ul className="space-y-2 text-gray-700">
          {brands.map((brand) => (
            <li
              key={brand}
              className={`cursor-pointer hover:text-blue-500 font-normal ${
                selectedBrand === brand ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() =>
                setSelectedBrand(selectedBrand === brand ? "" : brand)
              }
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
