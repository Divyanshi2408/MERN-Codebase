import React from "react";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cartItems, totalPrice, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-4 border-t mt-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between p-2 border rounded-md shadow-md mb-2">
                <span>
                  {item.name} x {item.quantity} - ${item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-bold">Total: ${totalPrice}</p>
          <button
            onClick={clearCart}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
