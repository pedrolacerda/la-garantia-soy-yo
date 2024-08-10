import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 100, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 200, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 150, image: 'product3.jpg' },
    { id: 4, name: 'Product 4', price: 250, image: 'product4.jpg' },
    { id: 5, name: 'Product 5', price: 300, image: 'product5.jpg' },
    { id: 6, name: 'Product 6', price: 350, image: 'product6.jpg' },
    { id: 7, name: 'Product 7', price: 400, image: 'product7.jpg' },
    { id: 8, name: 'Product 8', price: 450, image: 'product8.jpg' },
    { id: 9, name: 'Product 9', price: 500, image: 'product9.jpg' },
    { id: 10, name: 'Product 10', price: 550, image: 'product10.jpg' },
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
      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>Footer content here</p>
      </footer>
    </div>
  );
};

export default App;
