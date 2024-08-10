import React from 'react';
import 'tailwindcss/tailwind.css';

const Product = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h4 className="text-xl font-bold mb-2">{product.name}</h4>
      <p className="text-gray-700 mb-4">Price: ${product.price}</p>
      <button
        onClick={() => addToCart(product.id)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
