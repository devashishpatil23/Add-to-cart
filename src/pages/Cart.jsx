import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTitle from "../components/CartItem";

function Cart() {
  const { cart } = useSelector((state) => state);

  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(totalCart);
  return (
    <div>
      {cart && cart.length ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-start md:mt-10 items-center p-3">
            {cart.map((item) => (
              <CartTitle item={item} />
            ))}
          </div>
          <div className="flex flex-col justify-start items-center p-5 space-x-5 mt-14">
            <h1 className="font-bol text-lg text-red-700">summary</h1>
            <p className="text-gray-700 font-bold text-xl mb-2">
              <span>Total Items</span>
              <span> {cart.length}</span>
            </p>
            <p className="text-gray-700 font-bold text-xl mb-2">
              <span>Total Amount</span>
              <span> {totalCart}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-3">
            Your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
