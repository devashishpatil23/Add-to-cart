import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center min-w-full p-2 justify-start bg-gray-100 mt-2 mb-2 rounded-xl">
      <div className="flex p-2">
        <img src={item?.image} className="h-28 rounded-lg" />
      </div>
      <div className="ml-10 self-start space-y-4">
        <h1 className="text-sm  text-black font-bold">{item?.title}</h1>
        <p>Price: {item?.price}</p>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleRemoveFromCart}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartItem;
