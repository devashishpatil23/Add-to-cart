import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Cards from "../components/Cards";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchProducts() {
    setLoading(true);
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center py-4 px-4 lg:px-20">
          <Circles
            height={"120"}
            width={"120"}
            color="	rgb(30,144,255)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 justify-center items-center max-w-screen-xl md:grid-cols-3 lg:grid-cols-4   mx-auto p-3 ">
          {products && products.length
            ? products.map((item) => <Cards product={item} />)
            : "No Products to show"}
        </div>
      )}
    </div>
  );
}

export default Home;
