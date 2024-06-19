import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between mx-auto py-4 px-5 lg:px-52 bg-gray-100">
      <Link to={"/"}>
        <h2 className="text-blue-500 font-medium text-2xl  p-2 border-2 border-zinc-900">
          Shoping Cart
        </h2>
      </Link>
      <div className="mt-3">
        <Link
          to={"/"}
          className="px-3 text-lg hover:text-blue-700 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to={"/cart"}
          className="px-3 text-lg hover:text-blue-700 cursor-pointer"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
