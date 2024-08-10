const products = [
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
];

const cart = [];

function displayProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartSection = document.querySelector('.cart');
    cartSection.innerHTML = '<h3>Cart</h3>';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
        `;
        cartSection.appendChild(cartItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
