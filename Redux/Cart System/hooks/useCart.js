import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

export const useCart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return {
    cartItems,
    totalPrice,
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    clearCart: () => dispatch(clearCart()),
  };
};
