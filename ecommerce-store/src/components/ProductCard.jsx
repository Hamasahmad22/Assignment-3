import React from "react";

const ProductCard = ({ title, image, price }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-green-600 font-bold">${price}</p>
    </div>
  );
};

export default ProductCard;
