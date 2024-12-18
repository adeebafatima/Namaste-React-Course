import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  //Subscribe to only specific portion of the store like store.cart.items
  //Performance Optimization
  //   Less Re-Rendering: When you use useSelector to subscribe to a specific slice of the store (e.g., store.cart.items), your component only re-renders when that specific portion changes.
  //   If you subscribed to the entire store, your component would re-render whenever any part of the store changes, even if the data your component depends on hasn't been modified.
  //Better performance,More maintainable and readable code,Scalability for large applications,Debugging ease.
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          "Your cart is empty! Add Something ;)"
        ) : (
          <button
            className="m-2 p-2 text-white bg-black rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        <ItemList itemCards={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
