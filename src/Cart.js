import React from 'react';
import 'tailwindcss/tailwind.css';

const Cart = ({ cart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-2xl font-bold mb-4">Cart</h3>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <p className="text-gray-700">{item.name}</p>
            <p className="text-gray-700">${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
