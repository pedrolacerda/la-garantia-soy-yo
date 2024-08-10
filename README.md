# La Garantia Soy Yo

There's nothing for you to see here, ma' friend

## Website Colors
The website uses the colors of the flag of Paraguay: red, white, and blue.

## Catchy Headline
"Almost Original, Almost Yours!"

## Website Purpose and Features
La Garantia Soy Yo is a front-end website that sells electronic goods. The website is designed with the colors of the flag of Paraguay (red, white, and blue) to create a vibrant and appealing look. The catchy headline "Almost Original, Almost Yours!" indicates that the products are not original, but makes it feel they are almost as good as the originals.

The website includes the following features:
- A header with the website's name "La Garantia Soy Yo"
- A section for listing electronic goods with their name, price, and photo
- A footer with the website's colors (red, white, and blue)
- Functionality to add products to the cart and display the cart contents

## React and TailwindCSS Implementation

The website has been refactored to use React and TailwindCSS for better performance and maintainability. The new implementation includes the following components:

- `App.js`: The main component that manages the state for products and cart, and renders the `ProductList` and `Cart` components.
- `ProductList.js`: A component that renders a list of `Product` components.
- `Product.js`: A component that renders the details of a single product and includes a button to add the product to the cart.
- `Cart.js`: A component that renders the items in the cart.

## Setting Up and Running the React Application

To set up and run the React application, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/pedrolacerda/la-garantia-soy-yo.git
   cd la-garantia-soy-yo
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the website.

## TailwindCSS

TailwindCSS is used for styling the components. The utility classes provided by TailwindCSS make it easy to create a responsive and visually appealing design.

For more information on TailwindCSS, visit the [official documentation](https://tailwindcss.com/docs).
