import Card from "../components/Card";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import { useProducts } from "../context/ContextProvider";
import { RotatingLines } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { filterByCategory, filterByName } from "../helper/filterProducts";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setDisplay(products);
  }, [products]);
  useEffect(() => {
    setSearchParams(query);
    let filterProducts = filterByName(search, products);
    filterProducts = filterByCategory(query.category, filterProducts);
    console.log(query);
    setDisplay(filterProducts);
  }, [query]);
  return (
    <>
      <Search data={{ search, setSearch }} query={query} setQuery={setQuery} />
      <div className="flex flex-col-reverse">
        {!display.length ? (
          <div className=" flex justify-center items-center h-screen">
            <RotatingLines
              height="80"
              width="80"
              color="grey"
              strokeWidth="3"
              strokeColor="#fe5d42"
            />
          </div>
        ) : (
          <div className="grid-cols-[65%] justify-center grid sm:grid-cols-auto-fill-240 sm:grid-rows-auto-fit-385 gap-x-5">
            {display.map((product) => (
              <Card key={product.id} data={product} />
            ))}
          </div>
        )}

        <div>
          <CategoryList query={query} setQuery={setQuery} />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
