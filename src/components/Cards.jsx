function Cards({ product }) {
  return (
    <div class="max-w-sm flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 h-[360px] ">
      <div className="text-center flex items-center justify-center h-[180px] py-2">
        <img class=" h-full object-cover " src={product?.image} alt="" />
      </div>

      <d iv class="p-5 ">
        <h5 class="mb-2 truncate  text- font-bold tracking-tight text-gray-900 dark:text-white">
          {product?.title}
        </h5>

        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add to cart
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </d>
    </div>
  );
}

export default Cards;
