import React from "react";
import { useCart } from "../hooks/useCart";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Headphones", price: 200 },
  { id: 3, name: "Mouse", price: 50 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex justify-between p-2 border rounded-md shadow-md mb-2">
            <span>{product.name} - ${product.price}</span>
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
