import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [products] = useState([
      { id: 1, name: 'Telefone 1', price: 100, image: 'product1.webp' },
      { id: 2, name: 'Telefone 2', price: 200, image: 'product2.webp' },
      { id: 3, name: 'Telefone 3', price: 150, image: 'product3.webp' },
      { id: 4, name: 'Telefone 4', price: 250, image: 'product4.webp' },
      { id: 5, name: 'Telefone 5', price: 300, image: 'product5.webp' },
      { id: 6, name: 'Telefone 6', price: 350, image: 'product6.webp' },
      { id: 7, name: 'Telefone 7', price: 400, image: 'product7.webp' },
      { id: 8, name: 'Telefone 8', price: 450, image: 'product8.webp' },
      { id: 9, name: 'Telefone 9', price: 500, image: 'product9.webp' },
      { id: 10, name: 'Telefone 10', price: 550, image: 'product10.webp' },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    setCart([...cart, product]);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="bg-red-500 text-white p-4">
        <h1 className="text-3xl font-bold">La Garantia Soy Yo</h1>
        <p className="text-xl">Almost original, almost yours</p>
      </header>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
