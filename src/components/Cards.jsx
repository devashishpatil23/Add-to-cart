import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

function Cards({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const handleAddToCard = () => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };
  return (
    <div className="max-w-sm flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 h-[360px] ">
      <div className="text-center flex items-center justify-center h-[180px] py-2">
        <img className=" h-full object-cover " src={product?.image} alt="" />
      </div>

      <div className="p-5 ">
        <h5 className="mb-2 truncate  text- font-bold tracking-tight text-gray-900 dark:text-white">
          {product?.title}
        </h5>

        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={
            cart.some((item) => item.id === product.id)
              ? handleRemoveFromCart
              : handleAddToCard
          }
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from cart"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default Cards;
