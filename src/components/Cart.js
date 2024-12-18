import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
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