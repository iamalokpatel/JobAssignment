// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, selectedColor }) => {
  return (
    <div className="border p-3 rounded shadow hover:shadow-lg transition relative">
      {product.isHot && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          HOT
        </span>
      )}

      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="mt-2 font-semibold">{product.name}</h2>

      <div className="flex items-center gap-2 mt-1">
        <p className="text-gray-800 font-bold">${product.discountPrice}</p>
        {product.discountPercent && (
          <p className="text-gray-500 line-through">${product.price}</p>
        )}
        {product.discountPercent && (
          <p className="text-green-600 text-sm">-{product.discountPercent}%</p>
        )}
      </div>

      <div className="flex items-center gap-1 mt-1">
        <span>⭐ {product.ratingValue}</span>
        <span className="text-gray-500 text-sm">({product.ratingCount})</span>
      </div>

      <div className="flex mt-2 gap-1">
        {product.colors.map((color, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full border ${
              selectedColor === color ? "border-2 border-blue-500" : ""
            }`}
            style={{ backgroundColor: color }}
            title={color}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
